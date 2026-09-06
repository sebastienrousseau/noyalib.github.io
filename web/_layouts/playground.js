// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT
//
// The playground drives the published noyalib-wasm bundle, vendored under
// /wasm/ at the release the site names. The engine is instantiated once, on
// the first click, so a visitor who only reads the page never downloads it.
//
// Progressive enhancement: the textarea, the example and the prose are in the
// HTML. This file only wires the buttons to the engine.
(function () {
  "use strict";

  var input = document.getElementById("playInput");
  var output = document.getElementById("playOutput");
  var status = document.getElementById("playStatus");
  var timing = document.getElementById("playTiming");
  var run = document.getElementById("playRun");
  var back = document.getElementById("playYaml");
  var example = document.getElementById("playExample");
  if (!input || !output || !run) return;

  var EXAMPLE = [
    "# A release manifest with the things YAML gets wrong elsewhere.",
    "version: 0.0.36",
    "hex: 0x2A            # core schema integer",
    "sci: 1.23e-4         # float",
    "empty:               # implicit null",
    "quoted: \"0x2A\"       # stays a string",
    "base: &defaults",
    "  retries: 3",
    "  timeout: 30s",
    "prod:",
    "  <<: *defaults",
    "  retries: 5",
    "message: |",
    "  Literal block.",
    "  Line breaks kept.",
    "tags: [rust, wasm, !custom local]",
    ""
  ].join("\n");

  var engine = null;
  function load() {
    if (!engine) {
      setStatus("Loading the engine (190 KB, once).", "");
      engine = import("/wasm/noyalib_wasm.js").then(function (m) {
        return m.default().then(function () { return m; });
      });
    }
    return engine;
  }

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = "play-status" + (kind ? " " + kind : "");
  }

  function show(text, isError) {
    output.textContent = text;
    output.className = "play-output" + (isError ? " is-error" : "");
  }

  function toJson() {
    var yaml = input.value;
    if (!yaml.trim()) {
      show("{}", false);
      setStatus("Empty input parses to an empty document.", "is-ok");
      timing.textContent = "";
      return;
    }
    load().then(function (m) {
      var t0 = performance.now();
      var value = m.parseJson(yaml);
      var ms = performance.now() - t0;
      show(JSON.stringify(value, null, 2), false);
      setStatus("Valid YAML 1.2.", "is-ok");
      timing.textContent = "Parsed in " + ms.toFixed(2) + " ms by noyalib-wasm, in this tab. Nothing was sent anywhere.";
    }).catch(function (e) {
      show(String(e && e.message ? e.message : e), true);
      setStatus("The parser refused the input.", "is-error");
      timing.textContent = "";
    });
  }

  function toYaml() {
    var text = output.textContent;
    var value;
    try {
      value = JSON.parse(text);
    } catch (e) {
      setStatus("Convert to JSON first; the result panel must hold JSON.", "is-error");
      return;
    }
    load().then(function (m) {
      var t0 = performance.now();
      var yaml = m.stringify(value);
      var ms = performance.now() - t0;
      input.value = yaml;
      setStatus("Serialised back to YAML.", "is-ok");
      timing.textContent = "Serialised in " + ms.toFixed(2) + " ms. Comments and anchors are not part of the data model, so they do not come back.";
      input.focus();
    }).catch(function (e) {
      setStatus(String(e && e.message ? e.message : e), "is-error");
    });
  }

  run.addEventListener("click", toJson);
  if (back) back.addEventListener("click", toYaml);
  if (example) {
    example.addEventListener("click", function () {
      input.value = EXAMPLE;
      toJson();
    });
  }
  input.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      toJson();
    }
  });
})();
