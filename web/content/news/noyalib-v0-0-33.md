---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.33 — one standard across six crates"
description: "Release notes for noyalib v0.0.33: every crate at one version, a repository standard across all six, a lossless-edit layout fix, and a demo on the real engine."
keywords: "noyalib v0.0.33, noyalib release notes, noyalib 0.0.33 changelog"
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
headline: "noyalib v0.0.33"
lead: "Six crates at one version, one standard across all six repositories, and a browser demo that finally runs the real engine."
---

## What changed

v0.0.33 is a housekeeping release with one parser fix and a lot of
scaffolding. It closed every open pull request and issue in the core, and it
brought the five companion repositories up to the same standard as the core:
community files, a manual per repository, seed corpora and replay jobs for
the fuzzers, and shared CI gates pinned to one core commit.

## Fixes

- **Lossless edits keep the file's layout.** Inserting an entry with a
  value that spans several lines follows the surrounding indentation instead
  of starting at column zero.
- **Duplicate keys are reported with a position.** The error names the line
  and column of the second occurrence.
- **The website demo runs the real engine.** It previously used a mock
  parser, which rendered nulls as missing and mishandled tags, hex integers
  and merge keys. It now loads the published WebAssembly bundle and shows
  the JSON data model through `parseJson`, a new export that strips tags
  the way the official test suite expects.

## Evidence

- 406 of 406 official test cases in the core, and from this release the
  same cases through the CLI, the language server, the MCP server, the
  serde_yaml shim and the WebAssembly build.
- A family scorecard of 131 probes across the six repositories, rated A+.
- Every dependency bump folded into the release branch, with cargo-vet
  audits refreshed.

## Upgrading

Bump every noyalib crate you use to `0.0.33`. The companions pin the core
exactly, so Cargo resolves the set for you. Nothing in the public API changed
shape in this release.

## Next

v0.0.34 carries the reliability work: property tests for the serialiser,
structure-aware fuzzing through `Arbitrary`, a `no_std` fuzz crate, and the
fix for an unterminated verbatim tag that the new fuzzer found in its first
minute.
