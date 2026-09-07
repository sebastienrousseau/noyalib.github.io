---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Developer docs — install and use noyalib"
description: "Install the library, the CLI, the language server, the MCP server and the WebAssembly build, with a ten-line example for each and links to the reference."
keywords: "noyalib docs, noyalib install, noyafmt, noyavalidate, noyalib-lsp setup, noyalib-mcp setup, noyalib-wasm npm, rust yaml example"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_docs: "true"
banner: "datagrid-purple"
banner_alt: "Lines of code and data rendered as a violet grid."
eyebrow: "Developer docs"
headline: "Ten lines to your first parse."
lead: "Every product, what it needs, and how it fits your project, your build, your editor and your assistant."
---

## Install the library

```toml
[dependencies]
noyalib = "0.0.41"
```

noyalib needs Rust 1.86 or newer and builds on every tier-1 platform. With
`default-features = false` and the `std` feature it drops to five runtime
dependencies; without `std` it builds for `no_std` targets with `alloc`.

## Read and write

```rust
use noyalib::{from_str, to_string, Value};

let value: Value = from_str("name: api\nports: [8080, 8443]\n")?;
assert_eq!(value["ports"][1], Value::from(8443));

let text = to_string(&value)?;
```

For typed data, derive `serde::Deserialize` on a struct and call the same
`from_str`. `from_str_strict` adds typo detection: an unknown field is an
error that names the closest known one. `load_all` reads a multi-document
stream, and `Spanned<T>` records where each value came from.

The [user guide](https://sebastienrousseau.github.io/noyalib/manual/) walks
through every feature. The [API reference](https://docs.rs/noyalib) is on
docs.rs.

## Edit without losing anything

```rust
use noyalib::cst::parse_document;

let mut doc = parse_document("# release\nversion: 0.0.40\n")?;
doc.set("version", "0.0.41")?;
assert_eq!(doc.to_string(), "# release\nversion: 0.0.41\n");
```

The lossless tree keeps comments, blank lines and indentation. It can rename
a key, move an item, add an entry in the file's own style, and replace an
alias with the anchored content. This is the API behind the editor and the
MCP server.

<h2 id="cli">Format and validate on the command line</h2>

```bash
cargo install noya-cli --locked
noyafmt --check config/
noyavalidate deploy.yaml --schema schema.json
```

Both binaries exit non-zero on a problem, so a broken manifest fails the
build. Signed tarballs for Linux, macOS and Windows are attached to every
[release](https://github.com/sebastienrousseau/noya-cli/releases), and
`ghcr.io/sebastienrousseau/noya-cli` runs them in a container. Homebrew,
Scoop and the AUR carry the same binaries.

<h2 id="lsp">Get diagnostics in your editor</h2>

```bash
cargo install noyalib-lsp --locked
```

Point your editor at the `noyalib-lsp` binary. The
[editor guide](https://sebastienrousseau.github.io/noyalib-lsp/manual/) has
the settings for VS Code, Zed and Neovim. You get parse errors as you type,
formatting on save, and the description from a JSON Schema when you hover a
key. Multi-document files are understood.

<h2 id="mcp">Give an AI agent safe YAML edits</h2>

```bash
npx @sebastienrousseau/noyalib-mcp
```

No Rust toolchain is needed; the wrapper downloads the signed binary for your
platform. Add it to your client's server list and the assistant gains three
tools: read a value at a path, set one, and update several documents in a
stream. The [MCP page](/mcp/) has the client configurations.

<h2 id="wasm">Parse in the browser</h2>

```bash
npm install @sebastienrousseau/noyalib-wasm
```

```js
import init, { parseJson, stringify } from "@sebastienrousseau/noyalib-wasm";
await init();
const data = parseJson("name: api\nport: 8080\n");
const yaml = stringify(data);
```

`parseJson` returns plain JSON data; `parse` keeps custom tags. There are
also `validateJson`, `getPath`, `merge` and a lossless `WasmDocument`. The
[playground](/playground/) runs this bundle.

## Where next

- [The manual](https://sebastienrousseau.github.io/noyalib/manual/) for every feature in order.
- [Frequently asked questions](/faq/) for the short answers.
- [Conformance evidence](/conformance/) for what is measured on every change.
