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
banner: "getty-images-f9bcOaV5zbU"
banner_alt: "Looking up between financial district towers against a clear sky."
eyebrow: "Solutions"
headline: "Whatever you do with YAML. Done right."
lead: "Six ways to reach one parser, each aimed at a job people actually have."
---

## Read and write YAML in Rust

**Typed, fast, strict.** `from_str` reads a document into a struct through
serde. `to_string` writes it back. Anchors, merge keys, block scalars,
custom tags and multi-document streams, handled. Strict mode names the
field you probably meant.

Faster than every other pure-Rust YAML crate on every fixture measured.
The [benchmarks](https://github.com/sebastienrousseau/noyalib/blob/main/docs/BENCHMARKS.md)
name the host, the toolchain and the command.

[Read the developer docs](/docs/).

## Replace serde_yaml without touching your source

**One line. Zero changes.** `serde_yaml` was archived in 2024.
`noyalib-serde-yaml` keeps its API, its error text and its behaviour.
Rename the package in Cargo.toml and you are done.

[See the one-line migration](/migration/).

## Format and validate in your build

**Fail the build, not the deploy.** `noyafmt` formats a tree in place, or
checks it and exits non-zero. `noyavalidate` checks a document against a
JSON Schema and fixes what it safely can. Signed binaries, a container, and
Homebrew, Scoop and AUR.

[Set up the command line](/docs/#cli).

## See problems in your editor

**Diagnostics as you type.** `noyalib-lsp` works with VS Code, Zed, Neovim
and any other client. Parse errors while you write. Formatting on save.
Schema descriptions on hover.

[Configure your editor](/docs/#lsp).

## Let an AI agent edit YAML safely

**Byte-faithful edits.** `noyalib-mcp` gives an assistant three tools: read
a value, set it, update a document in a stream. Every write goes through the
lossless tree. One line changes. Every comment stays.

[Set up the agent tooling](/mcp/).

## Parse in the browser or at the edge

**The same parser, in the tab.** `noyalib-wasm` parses, serialises,
validates and reads paths with no server and no network. The
[playground](/playground/) is this package, unchanged.

[Try it in the browser](/playground/).
