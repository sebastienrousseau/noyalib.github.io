---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "The noyalib family — six products, one version"
description: "Six products, one parser: the library, the serde_yaml drop-in, the CLI, the language server, the MCP server and the WebAssembly build, released at one version."
keywords: "noyalib ecosystem, noyalib crates, noya-cli, noyalib-lsp, noyalib-mcp, noyalib-wasm, noyalib-serde-yaml, lockstep release"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_ecosystem: "true"
banner: "digital-constellation"
banner_alt: "A network of connected points of light against a dark background."
eyebrow: "The family"
headline: "One parser. Six products. One version."
lead: "Every product below is the same engine, wrapped for the place you meet YAML. They release together, and each one pins the core exactly."
---

## noyalib

**The library.** Typed data binding through serde. A lossless tree for
tools. Spans, strict mode, schemas, streams, async, no_std. Every official
test case, zero unsafe code.

[crates.io](https://crates.io/crates/noyalib) ·
[docs.rs](https://docs.rs/noyalib) ·
[manual](https://sebastienrousseau.github.io/noyalib/manual/) ·
[source](https://github.com/sebastienrousseau/noyalib)

## noyalib-serde-yaml

**serde_yaml, without the archive notice.** Rename the package in
Cargo.toml and keep every call site. Same functions, same errors, same
behaviour, pinned by an 18-case contract captured from the original.

[crates.io](https://crates.io/crates/noyalib-serde-yaml) ·
[manual](https://sebastienrousseau.github.io/noyalib-serde-yaml/manual/) ·
[source](https://github.com/sebastienrousseau/noyalib-serde-yaml)

## noya-cli

**Format. Validate. Fail the build, not the deploy.** `noyafmt` and
`noyavalidate`, as signed binaries for Linux, macOS and Windows, a
container image, and Homebrew, Scoop and AUR packages.

[crates.io](https://crates.io/crates/noya-cli) ·
[manual](https://sebastienrousseau.github.io/noya-cli/manual/) ·
[source](https://github.com/sebastienrousseau/noya-cli)

## noyalib-lsp

**Diagnostics as you type. In any editor.** Errors while you write,
formatting on save, schema descriptions on hover. VS Code, Zed, Neovim
and anything else that speaks the protocol.

[crates.io](https://crates.io/crates/noyalib-lsp) ·
[manual](https://sebastienrousseau.github.io/noyalib-lsp/manual/) ·
[source](https://github.com/sebastienrousseau/noyalib-lsp)

## noyalib-mcp

**YAML edits by an assistant. Byte-faithful.** Three tools over the
Model Context Protocol, every write through the lossless tree. On npm and
as a container, no Rust toolchain required.

[crates.io](https://crates.io/crates/noyalib-mcp) ·
[npm](https://www.npmjs.com/package/@sebastienrousseau/noyalib-mcp) ·
[manual](https://sebastienrousseau.github.io/noyalib-mcp/manual/) ·
[source](https://github.com/sebastienrousseau/noyalib-mcp)

## noyalib-wasm

**The same parser, in the browser tab.** Parse, serialise, validate and
edit with no server and no network. The playground on this site is this
package, unchanged.

[crates.io](https://crates.io/crates/noyalib-wasm) ·
[npm](https://www.npmjs.com/package/@sebastienrousseau/noyalib-wasm) ·
[manual](https://sebastienrousseau.github.io/noyalib-wasm/manual/) ·
[source](https://github.com/sebastienrousseau/noyalib-wasm)

## Tech specs

| | Detail |
|---|---|
| YAML | 1.2 core schema, with a YAML 1.1 preset for legacy files |
| Test suite | 406 of 406 official cases, through every product |
| Unsafe code | None. `#![forbid(unsafe_code)]` in every crate |
| Rust | 1.86 or newer; Linux, macOS, Windows; `no_std` with an allocator |
| Dependencies | 12 runtime crates by default, 5 in the minimal profile |
| Limits | Nesting depth, alias expansion, node count and input size, on by default |
| Release | Six crates at one version, signed and attested, with an SBOM |
| Licence | Apache-2.0 or MIT, at your option |

## The lockstep rule

Every crate carries the same version number, and every companion pins the
core exactly. A release is one event across six repositories. A gate
refuses the tag while any reference still points at a branch. "Which
version do I have" has one answer.

## The same tests, everywhere

The core passes all 406 official cases. Every companion runs those cases
through its own entry point: the CLI's exit code, the language server's
diagnostics, the MCP tool result, the shim's `from_str` and the
WebAssembly JSON model. The [conformance page](/conformance/) has the
numbers.
