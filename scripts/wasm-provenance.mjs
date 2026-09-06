// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT
//
// The playground bundle under web/wasm/ must be the published
// `@sebastienrousseau/noyalib-wasm` package for the version in VERSION,
// byte for byte.
//
// The site tells visitors the playground runs the released engine. Two
// releases were vendored from local builds when the npm package was
// broken, which was right at the time and wrong to leave in place. This
// gate makes the claim checkable: the tarball is fetched by exact
// version, verified against the integrity hash the registry publishes,
// and compared with the files this repository serves.
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const version = readFileSync(join(root, "VERSION"), "utf8").trim();
const name = "@sebastienrousseau/noyalib-wasm";

const meta = JSON.parse(
  execFileSync("curl", ["-sSf", "--retry", "5",
    `https://registry.npmjs.org/${encodeURIComponent(name)}/${version}`]).toString(),
);
const tmp = mkdtempSync(join(tmpdir(), "noyalib-wasm-"));
execFileSync("curl", ["-sSfL", "--retry", "5", "-o", join(tmp, "pkg.tgz"), meta.dist.tarball]);

const [algo, want] = meta.dist.integrity.split("-", 2);
const got = createHash(algo).update(readFileSync(join(tmp, "pkg.tgz"))).digest("base64");
if (got !== want) {
  console.error(`${name}@${version}: ${algo} ${got} does not match the registry's ${want}`);
  process.exit(1);
}
console.log(`${name}@${version}: ${algo} integrity ok`);

execFileSync("tar", ["-xzf", join(tmp, "pkg.tgz"), "-C", tmp]);
let bad = 0;
for (const file of ["noyalib_wasm_bg.js", "noyalib_wasm_bg.wasm"]) {
  const published = readFileSync(join(tmp, "package", file));
  const vendored = readFileSync(join(root, "web", "wasm", file));
  if (published.equals(vendored)) {
    console.log(`  ${file}: identical to the published package (${vendored.length} bytes)`);
  } else {
    console.log(`  ${file}: DIFFERS from the published package (${vendored.length} vendored, ${published.length} published)`);
    bad += 1;
  }
}
if (bad > 0) {
  console.error(`re-vendor from the ${version} tarball: the site must serve what it says it serves`);
  process.exit(1);
}
