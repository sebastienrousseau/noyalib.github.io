---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Ecosystem — the six noyalib crates, released together"
description: "The six noyalib crates: what each is for, where it is published, and the lockstep rule that releases them together at one version."
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
eyebrow: "Ecosystem"
headline: "Six crates, one version"
lead: "The library and its five companions release together, and each companion pins the core exactly. A gate refuses a tag when any of them drifts."
---

## The crates

| Crate | What it is | Where |
|---|---|---|
| `noyalib` | The YAML 1.2 parser and serialiser, with serde and the lossless editor | [crates.io](https://crates.io/crates/noyalib) · [docs.rs](https://docs.rs/noyalib) · [source](https://github.com/sebastienrousseau/noyalib) |
| `noyalib-serde-yaml` | The drop-in `serde_yaml` replacement: rename the package, change nothing | [crates.io](https://crates.io/crates/noyalib-serde-yaml) · [source](https://github.com/sebastienrousseau/noyalib-serde-yaml) |
| `noya-cli` | `noyafmt` and `noyavalidate`, as signed binaries, a container and Homebrew, Scoop and AUR packages | [crates.io](https://crates.io/crates/noya-cli) · [source](https://github.com/sebastienrousseau/noya-cli) |
| `noyalib-lsp` | The language server for VS Code, Zed, Neovim and any other client | [crates.io](https://crates.io/crates/noyalib-lsp) · [source](https://github.com/sebastienrousseau/noyalib-lsp) |
| `noyalib-mcp` | The Model Context Protocol server for AI agents, also on npm and as a container | [crates.io](https://crates.io/crates/noyalib-mcp) · [npm](https://www.npmjs.com/package/@sebastienrousseau/noyalib-mcp) · [source](https://github.com/sebastienrousseau/noyalib-mcp) |
| `noyalib-wasm` | The parser compiled to WebAssembly, published on npm | [crates.io](https://crates.io/crates/noyalib-wasm) · [npm](https://www.npmjs.com/package/@sebastienrousseau/noyalib-wasm) · [source](https://github.com/sebastienrousseau/noyalib-wasm) |

Each repository has its own manual, built from the same sources as its
README: [noyalib](https://sebastienrousseau.github.io/noyalib/manual/),
[noyalib-serde-yaml](https://sebastienrousseau.github.io/noyalib-serde-yaml/manual/),
[noya-cli](https://sebastienrousseau.github.io/noya-cli/manual/),
[noyalib-lsp](https://sebastienrousseau.github.io/noyalib-lsp/manual/),
[noyalib-mcp](https://sebastienrousseau.github.io/noyalib-mcp/manual/) and
[noyalib-wasm](https://sebastienrousseau.github.io/noyalib-wasm/manual/).

## The lockstep rule

Every crate carries the same version number, and every companion depends on
the core with an exact pin. A release is one event across six repositories:
the core is tagged and published first, then each companion swaps its
pre-release git reference for the crates.io version and publishes. A script
refuses the tag while any reference still points at a branch.

The rule exists so that "which version do I have" has one answer. A fix in
the parser reaches the CLI, the editor, the agent and the browser in the same
release, and a report against any of them names the same core.

## The same tests, everywhere

The core passes the 406 cases of the official YAML test suite. Since
September 2026 every companion runs those cases through its own entry point
as well: the CLI's exit code, the language server's diagnostics, the MCP
tool result, the shim's `from_str` and the WebAssembly JSON model. The first
run found two real defects, in the language server and the MCP server, and
both were fixed before the next release. The
[conformance page](/conformance/) records the current numbers.

## What is shared

The six repositories share their CI workflows, pulled from the core at a
pinned commit: licence and dependency audits, supply-chain vetting, unused
dependency checks, REUSE compliance, strict docs, signature verification and
the test matrix. A change to a gate lands once and reaches every repository
when it re-pins.

They also share the community files: code of conduct, governance, support
policy, security policy and citation metadata. The
[ecosystem document](https://github.com/sebastienrousseau/noyalib/blob/main/docs/ECOSYSTEM.md)
in the core is the full account, including a scorecard of all six.
