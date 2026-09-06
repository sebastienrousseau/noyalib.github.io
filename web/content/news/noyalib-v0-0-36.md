---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.36 — stream positions and the suite as streams"
description: "Release notes for noyalib v0.0.36: CST stream errors located in the stream, the yaml-test-suite run as 7,488 streams, and the three scanner defects it found."
keywords: "noyalib v0.0.36, noyalib release notes, yaml stream error location, yaml-test-suite streams, noyalib scanner fixes"
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
headline: "noyalib v0.0.36"
lead: "An error in the third document of a stream now points at the third document. The test suite runs as streams, and the three defects it found are fixed."
---

## What changed

v0.0.36 is a correctness release for multi-document streams. It began
with a report from a downstream tool author and ended with the whole
yaml-test-suite exercised as streams.

## Fixed

- **Stream error positions.** `cst::parse_stream` and
  `parse_stream_with_config` report an error where it is in the
  stream, not where it is in the failing document. The typed loaders
  already did; the two entry points now agree byte for byte.
  Contributed by [@zoosky](https://github.com/zoosky) (#407, #408).
- **An all-blank keep-chomped block scalar before a document marker**
  (`- |+`, a line of spaces, then `---`) parsed on its own but failed
  inside a stream.
- **A tab before a top-level flow node** (`<tab>[`) was accepted in the
  first document of a stream and rejected in every later one. One rule
  now applies at every line start.
- **A `...` that closes nothing** made the CST count one document more
  than the typed loaders.
- **CST scanner errors carry their position**, the same one the typed
  loaders report.

## Added

- **The yaml-test-suite as streams.** Every valid suite case becomes a
  stream with a known-bad document injected first, in the middle and
  last, and every entry point must report the error at the injected
  byte. 7,488 streams run on every push.
- **The CLI and the MCP server** pin the same property through their
  own entry points: `noyavalidate --fix` and `noyalib_set_multidoc`
  report stream positions.
- **The npm package is gated before publish.** The 0.0.35
  `@sebastienrousseau/noyalib-wasm` package shipped without its
  bindings file after the release tooling drifted; 0.0.36 pins the
  tool and refuses a package whose entry imports a file the tarball
  leaves out.

## Upgrading

Bump every noyalib crate you use to `0.0.36`. No public API changed
shape. Users of the npm package on 0.0.35 should move to 0.0.36.
