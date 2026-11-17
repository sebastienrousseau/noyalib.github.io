---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.62: byte order marks where YAML allows them"
description: "Release notes for noyalib v0.0.62: a byte order mark is text only where YAML 1.2.2 allows it, closer serde_yaml 0.9 parity, and a summary of v0.0.58 to v0.0.60."
keywords: "noyalib v0.0.62, byte order mark, yaml 1.2.2, serde_yaml 0.9, libyaml, differential fuzzing"
author: "Sebastien Rousseau"
date: "2026-11-17"
news_publication_date: "2026-11-17"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · November 2026"
headline: "noyalib v0.0.62"
lead: "This release puts a byte order mark only where YAML 1.2.2 allows one and brings the serde_yaml profile closer to serde_yaml 0.9. It also brings this site up to date with v0.0.58 to v0.0.60."
---

## What changed in v0.0.62

- **A byte order mark is text only where YAML allows it.** The default
  profile refuses a BOM inside plain and block scalars, comments and
  directive lines, so `a: x\u{feff}y` is now a parse error. A BOM still
  opens the stream or a document prefix, and quoted scalars keep one.
  The `serde_yaml` profile reads it as text, as serde_yaml 0.9 does.
  Anchors, tags and `%TAG` directives refuse it in every profile.
- **Closer serde_yaml 0.9 parity.** Fuzzing noyalib against libyaml
  drove a long list of fixes, from under-indented continuation lines
  and document markers to integer overflow, tagged and anchored keys,
  and error paths: a sequence index reads `items[0].name`, and a root
  index prints as `.[1]` in the serde_yaml profile.
- **v0.0.61 folded in.** v0.0.61 was never published, so crates.io moves
  from 0.0.60 to 0.0.62 with every v0.0.61 change.

## Since v0.0.57

- **v0.0.58** hardened the parser, CST and loader boundaries, gave
  unknown and missing field errors a line, column and field path, and
  set Rust 1.89.0 as the family's minimum.
- **v0.0.59** made CST parsing, formatting and editing work without std,
  and kept tokio's fix for RUSTSEC-2026-0386.
- **v0.0.60** was a CI and evidence release; the core sources and public
  API did not change.

## Upgrading

Bump every noyalib crate you use to `0.0.62`; the family releases in
lockstep and each satellite pins the core at exactly `=0.0.62`. Most of
this release's parse changes are breaking, and the
[CHANGELOG](https://github.com/sebastienrousseau/noyalib/blob/main/CHANGELOG.md)
lists each one.
