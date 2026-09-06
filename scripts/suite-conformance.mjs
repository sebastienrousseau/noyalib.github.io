// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT
//
// Run the official YAML test suite through the WebAssembly bundle this
// site actually serves (web/wasm/), and check the conformance page's
// claim against the measured result.
//
// The site vendors a published `@sebastienrousseau/noyalib-wasm` build
// and tells visitors it is conformant. Until this gate existed nothing
// on the site checked that: the number on the page was prose. Here the
// bytes under web/wasm/ parse every case of
// https://github.com/yaml/yaml-test-suite and the page must agree.
//
// The suite comes from the noyalib core repository at the tag this site
// names in VERSION, so the cases are the ones that release was tested
// against. Set NOYALIB_SUITE_DIR to use a local checkout instead.
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import assert from "node:assert/strict";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const version = readFileSync(join(root, "VERSION"), "utf8").trim();

/** The suite's marker alphabet, per the suite's CONTRIBUTING.md. */
function decodeMarkers(input) {
  let out = "";
  const chars = [...input];
  for (let i = 0; i < chars.length; i += 1) {
    const c = chars[i];
    if (c === "␣") out += " ";
    else if (c === "⇥" || c === "»") out += "\t";
    else if (c === "↓") out += "\r";
    else if (c === "⇔") out += "﻿";
    else if (c === "↵") {
      // Marks a line break and swallows the newline that follows it.
      out += "\n";
      if (chars[i + 1] === "\n") i += 1;
    } else if (c === "∎") {
      // Strips the rest of the line, including its break.
      while (i + 1 < chars.length && chars[i + 1] !== "\n") i += 1;
      i += 1;
    } else if (c === "—") {
      // A run of em-dashes closed by `»` is a tab.
      let count = 1;
      while (chars[i + 1] === "—") { count += 1; i += 1; }
      if (chars[i + 1] === "»") { i += 1; out += "\t"; }
      else out += "—".repeat(count);
    } else out += c;
  }
  return out;
}

function suiteDir() {
  const fromEnv = process.env.NOYALIB_SUITE_DIR;
  if (fromEnv) return fromEnv;
  const cached = join(root, ".suite", `yaml-test-suite-${version}`);
  if (existsSync(cached)) return cached;
  const tmp = mkdtempSync(join(tmpdir(), "noyalib-suite-"));
  const url = `https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v${version}.tar.gz`;
  execFileSync("curl", ["-sSfL", "--retry", "5", "-o", join(tmp, "core.tar.gz"), url]);
  mkdirSync(cached, { recursive: true });
  execFileSync("tar", [
    "-xzf", join(tmp, "core.tar.gz"), "-C", cached, "--strip-components", "5",
    `noyalib-${version}/crates/noyalib/tests/yaml-test-suite`,
  ]);
  return cached;
}

/** Deep equality that treats an integer-valued float as its integer. */
function sameJson(a, b) {
  if (typeof a === "number" && typeof b === "number") return a === b || Math.abs(a - b) < 1e-12;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) return a.length === b.length && a.every((v, i) => sameJson(v, b[i]));
  if (a && b && typeof a === "object" && typeof b === "object") {
    const ka = Object.keys(a), kb = Object.keys(b);
    return ka.length === kb.length && ka.every((k) => k in b && sameJson(a[k], b[k]));
  }
  return a === b;
}

// Load the engine the way the site does: the loader under web/wasm/,
// fetching the .wasm over http from the built site. NOYALIB_BASE_URL is
// the server the Makefile starts, the same one the browser gates use.
const base = process.env.NOYALIB_BASE_URL ?? "http://127.0.0.1:8899";
const wasm = await import(pathToFileURL(join(root, "web", "wasm", "noyalib_wasm.js")).href);
await wasm.default(`${base}/wasm/noyalib_wasm_bg.wasm`);

const dir = suiteDir();
const files = readdirSync(dir).filter((f) => f.endsWith(".yaml")).sort();
assert.ok(files.length > 300, `only ${files.length} suite files under ${dir}`);

let pass = 0, streams = 0;
const failures = [];

for (const file of files) {
  const id = file.replace(/\.yaml$/, "");
  let cases;
  try {
    cases = wasm.parseJson(readFileSync(join(dir, file), "utf8"));
  } catch (e) {
    failures.push(`${id}: the wrapper file itself did not parse: ${e.message}`);
    continue;
  }
  for (const c of Array.isArray(cases) ? cases : [cases]) {
    if (!c || typeof c.yaml !== "string") continue;
    const yaml = decodeMarkers(c.yaml);
    if (c.fail === true) {
      let refused = false;
      try { wasm.parseJson(yaml); } catch { refused = true; }
      if (refused) pass += 1;
      else failures.push(`${id}: expected the parse to be refused, it succeeded`);
      continue;
    }
    let expected, single = true;
    if (typeof c.json === "string") {
      try { expected = JSON.parse(c.json); } catch { single = false; }
    }
    if (!single) { streams += 1; continue; }  // multi-document: outside parseJson
    let got;
    try { got = wasm.parseJson(yaml); }
    catch (e) {
      // `parseJson` is single-document by contract, so a stream is
      // outside it rather than a failure; a case with no expected JSON
      // does not announce that it is a stream, so the refusal does.
      if (/more than one document/.test(e.message)) { streams += 1; continue; }
      failures.push(`${id}: ${e.message}`);
      continue;
    }
    if (expected === undefined || sameJson(got, expected)) pass += 1;
    else failures.push(`${id}: value mismatch\n    expected ${JSON.stringify(expected)}\n    got      ${JSON.stringify(got)}`);
  }
}

const total = pass + failures.length;
console.log(`yaml-test-suite through web/wasm/ (noyalib-wasm ${version}): ${pass} of ${total}`);
console.log(`  ${streams} multi-document case(s) are outside parseJson, which is single-document`);
for (const f of failures.slice(0, 20)) console.log(`  FAIL ${f}`);

// The conformance page must claim exactly what this run measured.
const page = readFileSync(join(root, "web", "content", "conformance.md"), "utf8");
const row = page.split("\n").find((l) => l.includes("noyalib-wasm") && l.includes("|"));
assert.ok(row, "conformance.md has no noyalib-wasm row");
const claimed = row.match(/(\d+)\s+of\s+(\d+)/);
assert.ok(claimed, `conformance.md's noyalib-wasm row has no "N of N": ${row}`);
if (Number(claimed[1]) !== pass || Number(claimed[2]) !== total) {
  console.log(`  FAIL conformance.md claims ${claimed[1]} of ${claimed[2]}, this run measured ${pass} of ${total}`);
  process.exit(1);
}
console.log(`  the conformance page claims ${claimed[1]} of ${claimed[2]}, which is what ran`);
if (failures.length > 0) process.exit(1);
