---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Playground — run the YAML parser in your browser"
description: "Paste YAML and see the JSON the parser produces, then turn it back. The published noyalib-wasm bundle runs inside your tab; nothing is uploaded."
keywords: "yaml to json online, yaml parser online, yaml playground, yaml validator browser, noyalib wasm"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "playground"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_playground: "true"
eyebrow: "Playground"
headline: "Try the parser in your browser"
lead: "The published WebAssembly build, unchanged, running in this tab. Paste a document and see what the library sees."
---

## What you are looking at

The engine on this page is the `@sebastienrousseau/noyalib-wasm` package from
npm, at the release named in the footer. It is the same parser the Rust
library, the command line, the editor and the AI agent use. Nothing you paste
leaves your browser.

"Convert to JSON" calls `parseJson`, which strips custom tags and returns
plain data, exactly what the official test suite expects. "Back to YAML"
calls `stringify` on the result. Comments and anchors are not part of the
data model, so they do not survive the round trip; the lossless editor in the
library is the tool for that.

## Things to try

- Paste a document with an anchor and a merge key, and watch the alias
  resolve.
- Write `0x2A`, `1.23e-4` and `no`, and see which are numbers and which are
  strings under YAML 1.2.
- Leave a key with no value and see it come back as `null`.
- Paste something invalid, such as an unclosed flow sequence, and read the
  error.

## Use it in your own page

```bash
npm install @sebastienrousseau/noyalib-wasm
```

```js
import init, { parseJson } from "@sebastienrousseau/noyalib-wasm";
await init();
console.log(parseJson("greeting: hello\n"));
```

The [developer docs](/docs/#wasm) cover the rest of the API.
