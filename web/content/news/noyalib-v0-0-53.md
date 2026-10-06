---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.53: green on Rust 1.99"
description: "Release notes for noyalib v0.0.53: the family stays green under the checks Rust 1.99 added, and the dependency set is refreshed."
keywords: "noyalib v0.0.53, rust 1.99, clippy assert_is_empty, rustdoc module docs, jsonschema 0.58"
author: "Sebastien Rousseau"
date: "2026-10-06"
news_publication_date: "2026-10-06"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · 6 October 2026"
headline: "noyalib v0.0.53"
lead: "Rust 1.99 reached stable between releases and brought two new checks. Every crate in the family passes them, and the dependencies move with it."
---

## What changed

Rust 1.99 landed on the stable channel after v0.0.52 shipped. The
family's gates run clippy with the pedantic set and rustdoc in strict
mode, so two additions in that toolchain turned the core red: a lint
on bare `is_empty` assertions, and a change in how rustdoc resolves
links in module docs that were split across two files. This release
keeps every crate green under both and refreshes the dependency set.

## Changed

- **Dependencies refreshed.** The core moves to jsonschema 0.58,
  smallvec 1.16.2 and rustix 1.1.5, the CI actions move to current
  pins, and the cargo-vet exemptions are regenerated to match.
- **Module docs in one place.** The `cst` and `fmt` module docs lived
  half on the `pub mod` line and half in the module file. rustdoc 1.99
  merges those and resolves every link in the crate root, so three
  links were reported as redundant with no location to point at. Each
  module now carries its own docs, and the links resolve where they
  are written.
- **Assertions say what they expected.** Every bare `is_empty`
  assertion in the test suites now prints the value it found, which is
  what the new clippy lint asks for and a better failure message
  anyway.

## Upgrading

Bump every noyalib crate you use to `0.0.53`. No public API changed
shape; the API-breakage check against v0.0.52 passes.
