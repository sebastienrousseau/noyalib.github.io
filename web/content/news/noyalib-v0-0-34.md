---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.34 — the reliability release"
description: "Release notes for noyalib v0.0.34: property tests, structure-aware and no_std fuzzing, the arbitrary feature, a parser fix, and the suite through every crate."
keywords: "noyalib v0.0.34, noyalib release notes, noyalib 0.0.34 changelog, yaml fuzzing, arbitrary"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"

banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · 5 September 2026"
headline: "noyalib v0.0.34"
lead: "Property tests, two new fuzzers, a parser fix the new fuzzer found in its first minute, and the official test suite running through every crate in the family."
---

## What changed

v0.0.34 is the reliability release. It adds the testing the parser had
been missing, and it fixes what that testing found.

## Fixed

- **An unterminated verbatim tag is refused.** `!<` at the end of the input
  used to be accepted; the alloc-only fuzzer found it within a minute of
  its first run. The parser now reports "verbatim tag is not closed".
- **The language server accepts multi-document files.** A valid
  `---`-separated buffer got a false "more than one document" error;
  diagnostics and hover now parse the buffer as a stream.
- **The MCP server reads empty values.** `noyalib_get` on a key with no
  value returned "path not found"; it now returns the empty slice, and a
  missing key still errors.

## Added

- **Property tests** for the serialiser's block-scalar choices and the
  path grammar.
- **A structure-aware fuzz target** that builds arbitrary `Value` trees
  and checks the serialise-parse round trip, and **an alloc-only fuzz
  crate** so the `no_std` path is fuzzed too.
- **The `arbitrary` feature**, with `Arbitrary` for the public value
  types, so downstream fuzzers can build well-formed input.
- **The official test suite through every crate.** A shared workflow runs
  all 406 cases through the CLI's exit code, the language server's
  diagnostics, the MCP tool result, the serde_yaml shim and the
  WebAssembly JSON model, at the pinned core commit.

## Evidence

- 406 of 406 in the core and in every companion's own surface. The
  [conformance page](/conformance/) has the table.
- Miri runs Tree Borrows and the alignment check weekly; the per-request
  run keeps Stacked Borrows.
- Every open Dependabot bump folded in, with `cargo-vet` audits refreshed.

## Upgrading

Bump every noyalib crate you use to `0.0.34`. The public API gained the
optional `arbitrary` feature and changed nothing else.
