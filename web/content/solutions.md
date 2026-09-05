---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Solutions — what noyalib does for each kind of YAML work"
description: "Read YAML into Rust structs, replace serde_yaml without source changes, format and validate in CI, edit in your editor or by an agent, parse in the browser."
keywords: "yaml rust solutions, serde yaml replacement, yaml formatter, yaml validator json schema, yaml language server, yaml mcp server, yaml webassembly"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_solutions: "true"
eyebrow: "Solutions"
headline: "What noyalib does for you"
lead: "Six ways to reach the same parser, each aimed at a job people actually have."
---

## Read and write YAML in Rust

The data-binding API is what most projects need. `from_str` reads a document
into a typed struct through serde, and `to_string` writes it back. It handles
anchors, merge keys, block scalars, custom tags and multi-document streams. A
strict mode reports a misspelt field with the name it probably meant.

Every deserialise fixture measured is faster than every other pure-Rust YAML
crate, by 1.1 to 2 times. Serialising is 3 to 4 times faster than the closest
maintained fork. The [benchmarks](https://github.com/sebastienrousseau/noyalib/blob/main/docs/BENCHMARKS.md)
name the host, the toolchain and the command, so you can rerun them.

[Read the developer docs](/docs/).

## Replace serde_yaml without touching your source

`serde_yaml` was archived in 2024. `noyalib-serde-yaml` keeps its API, its
error text and its behaviour on the 18-case contract captured from the
original, so a package rename in Cargo.toml is the whole migration. When you
are ready, the native API is one import away.

[See the one-line migration](/migration/).

## Format and validate in your build

`noyafmt` formats a file or a tree in place, or checks it and exits non-zero.
`noyavalidate` checks a document against a JSON Schema and can fix what it
safely can. Both install with one Cargo command, ship as signed binaries for
Linux, macOS and Windows, and run in a container.

[Set up the command line](/docs/#cli).

## See problems in your editor

`noyalib-lsp` is a language server for VS Code, Zed, Neovim and anything else
that speaks the protocol. It reports parse errors as you type, formats on
save, and shows the description from a JSON Schema when you hover a key.

[Configure your editor](/docs/#lsp).

## Let an AI agent edit YAML safely

`noyalib-mcp` is a Model Context Protocol server. An assistant can read a
value at a path, set it, or update several documents in a stream. Edits go
through the lossless tree, so a change to one line leaves every comment and
every other line exactly as it was.

[Set up the agent tooling](/mcp/).

## Parse in the browser or at the edge

`noyalib-wasm` is the same parser compiled to WebAssembly and published on
npm. It parses, serialises, validates against a JSON Schema and reads values
at a path, with no server and no network. The [playground](/playground/) on
this site is that bundle, unchanged.

[Try it in the browser](/playground/).
