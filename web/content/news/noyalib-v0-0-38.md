---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.38 — every dependency pinned, on every workflow"
description: "Release notes for noyalib v0.0.38: no unpinned npm command left in any workflow, registry probes verify tarballs by hash, and a fixture that uses most of YAML."
keywords: "noyalib v0.0.38, noyalib release notes, scorecard pinned dependencies, npm ci lockfile, branch protection"
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
headline: "noyalib v0.0.38"
lead: "The last unpinned commands leave the family's workflows. Registry probes now verify what they fetch by hash, and every satellite's main branch is protected the way the core's is."
---

## What changed

v0.0.38 answers the open OpenSSF Scorecard findings across the family.
No library code changed; every crate moves together so that `=0.0.38`
names one known set.

## Fixed

- **No more `npm install` in any workflow.** The core's registry drift
  net fetches the exact declared version of each npm package, verifies
  the tarball against the sha512 the registry publishes, unpacks it by
  hand and checks that the package carries every file its entry module
  imports. The wasm and MCP releases assert the runner's npm supports
  OIDC trusted publishing instead of upgrading it. The VS Code
  extension builds with `npm ci` from a committed lockfile.
- **Satellite branch protection matches the core**: strict status
  checks, signed commits, code-owner review, conversation resolution,
  admins included.

## Also

- **An ultra-complex fixture through every crate.** A two-document
  configuration with anchors and merge keys at two depths, explicit tags
  including `!!pairs`, literal and folded block scalars and a sequence as
  a mapping key parses to exactly its expected JSON in the core, the CLI,
  the language server, the MCP server, the serde-yaml shim and the
  WebAssembly package; it is the [playground](/playground/)'s second
  example. Running it through `noyafmt` found three formatter defects
  around explicit keys and lone properties, fixed in the core.
- **Two diagnostics that name the mistake.** `!!!int` is refused with
  "did you mean `!!int`?", and an alias that names an anchor from an
  earlier document says where that anchor is defined and that anchors do
  not cross `---`.

## Upgrading

Bump every noyalib crate you use to `0.0.38`. Nothing else changes.
