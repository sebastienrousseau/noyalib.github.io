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
    "version: 0.0.41",
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

  // Document 2 of the core's ultra-complex fixture
  // (tests/fixtures/ultra-complex/valid.yaml): anchors and merge keys at
  // two depths, explicit tags including !!pairs, literal and folded block
  // scalars, a sequence as a mapping key. It projects onto JSON exactly.
  var EXAMPLE_COMPLEX = [
    "---",
    "# Document 2: Microservice Micro-Architecture Configuration",
    "#",
    "# Anchors do not cross a document boundary (YAML 1.2.2 \u00a73.2.2.2), so the",
    "# templates this document reuses are anchored again here.",
    "",
    "templates:",
    "  database: &database_template",
    "    adapter: postgresql",
    "    timeout: !!int 5000",
    "    pool: 10",
    "    encoding: utf-8",
    "    credentials:",
    "      username: app_admin",
    "      password: !!str SecureP@ssw0rd!",
    "  logging: &logging_template",
    "    level: info",
    "    format: \"[%{timestamp}s] [%{level}s] %{message}s\"",
    "    destination: /var/log/app/",
    "",
    "project_metadata:",
    "  name: \"OmniChannel Mesh Framework\"",
    "  version: &current_version \"4.12.2-rc3\"",
    "  classification: !!str InternalOnly",
    "",
    "# Deeply nested architecture matrix using block scalars and sequences",
    "services:",
    "  - name: ingestion-pipeline-service",
    "    version: *current_version  # Referencing string scalar anchor",
    "    ",
    "    # Literal Block Scalar (Preserves newlines exactly - great for scripts/keys)",
    "    startup_script: |",
    "      #!/bin/bash",
    "      echo \"Initializing Ingestion Mesh...\"",
    "      sysctl -w net.core.somaxconn=1024",
    "      exec ./bin/pipeline --mode=stream",
    "",
    "    # Folded Block Scalar (Converts single newlines into spaces - great for text blocks)",
    "    description: >",
    "      This pipeline ingests cross-platform streaming telemetries,",
    "      cleanses dirty schemas, aggregates standard KPIs, and dispatches",
    "      structured events to downstream brokers.",
    "",
    "    # Sequence of complex mappings with explicit data types",
    "    network:",
    "      ingress:",
    "        - port: !!int 443",
    "          protocol: TCP",
    "          policies: [ ALLOW_EXTERNAL, TLS_1.3_ONLY ] # Flow style sequence",
    "        - port: !!int 8080",
    "          protocol: UDP",
    "          policies:",
    "            - LOCAL_VPC_ONLY",
    "            - MESH_ROUTING",
    "      egress:",
    "        - destination: *database_template # Merging deep structures natively",
    "          routes:",
    "            active_paths:",
    "              - primary: /api/v1/write",
    "                backup: /api/v2/fallback",
    "",
    "    # Complex key example (Using a nested structure as a key mapping)",
    "    ? [ region, zone ]",
    "    : policy: geo-replicated",
    "      latency_threshold_ms: 45",
    "",
    "  - name: notification-delivery-engine",
    "    version: *current_version",
    "    logging:",
    "      <<: *logging_template # Re-using our logging template from Doc 1",
    "      level: debug         # Upgrading log verbosity for this service",
    "    matrix_routes:",
    "      !!pairs # Explicit collection type (ordered pairs allowing duplicate keys)",
    "      - sms: gateway.twilio.internal",
    "      - email: smtp.sendgrid.internal",
    "      - sms: backup.gateway.internal",
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
  var complex = document.getElementById("playExampleComplex");
  if (complex) {
    complex.addEventListener("click", function () {
      input.value = EXAMPLE_COMPLEX;
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
