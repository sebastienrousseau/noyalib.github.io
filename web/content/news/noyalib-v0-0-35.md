---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.35 — proofs, an Action, a VS Code extension"
description: "Release notes for noyalib v0.0.35: machine-checked input budgets, a wasip2 build, a GitHub Action and pre-commit hooks, a VS Code extension, and stateless MCP tools."
keywords: "noyalib v0.0.35, noyalib release notes, kani proofs yaml, noyalib github action, noyalib vscode extension, stateless mcp tools"
author: "Sebastien Rousseau"
date: "2026-09-06"
news_publication_date: "2026-09-06"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · 6 September 2026"
headline: "noyalib v0.0.35"
lead: "The limits that stop a hostile document are now machine-checked. The family gains a GitHub Action, pre-commit hooks, a VS Code extension and stateless agent tools."
---

## What changed

v0.0.35 closes the gaps a September 2026 assessment found against the
2027 landscape: formal proofs for the input budgets, a WASI build, and
the adoption surfaces the family lacked.

## Added

- **Machine-checked budgets.** Nesting depth, alias occurrences, the
  alias-to-anchor ratio, the transitive repetition charge, expanded
  bytes and the node ceiling are decided by pure functions, and Kani
  proves them exact, monotone and free of wrap-around on every push.
- **A wasm32-wasip2 build** of the library in CI, the WASI
  component-model target.
- **A GitHub Action.** `uses: sebastienrousseau/noya-cli@v0.0.35`
  installs the signed binaries, verifies their checksum and runs
  `noyafmt --check` and `noyavalidate`. Hosted pre-commit hooks too.
- **A VS Code extension** for noyalib-lsp, packaged as a `.vsix` on
  every push.
- **Stateless MCP tools.** `noyalib_parse`, `noyalib_edit` and
  `noyalib_validate` take content in the request and touch nothing on
  disk, the shape the July 2026 protocol's stateless deployments want.
- **A cookbook** in the core: task-shaped recipes, each naming its
  runnable example.

## Measured

- noyalib is 2.6 to 3.3 times faster than serde-saphyr 1.2.0 on every
  shared fixture, in one criterion run on one host, with the command
  disclosed. The [conformance page](/conformance/) has the table.
- Branch protection on the core now requires strict status checks,
  signed commits and code-owner review.

## Upgrading

Bump every noyalib crate you use to `0.0.35`. No public API changed
shape; the MCP server gained three tools and the CLI gained an Action
and hooks.
