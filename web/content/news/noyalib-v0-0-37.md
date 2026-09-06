---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.37 — the npm package returns, gated"
description: "Release notes for noyalib v0.0.37: a lockstep release whose one change is the noyalib-wasm npm package gate, repaired for npm 12 and back to publishing."
keywords: "noyalib v0.0.37, noyalib release notes, noyalib-wasm npm, npm package gate, lockstep release"
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
headline: "noyalib v0.0.37"
lead: "One change, released everywhere at once: the npm package of noyalib-wasm is gated before it ships, and the gate now reads what npm 12 prints."
---

## What changed

v0.0.37 exists because of one job in one workflow. The v0.0.36 release
of noyalib-wasm published its crate and its GitHub release, then failed
to publish to npm inside the package gate that v0.0.36 had just
introduced: npm 12 on the runner prints `npm pack --json` as an object
keyed by package name, where npm 11 printed an array.

Every noyalib crate moves together, so the repair is a release of the
whole family.

## Fixed

- **The npm package gate reads both shapes** of `npm pack --json` and
  refuses an empty listing. It is tested under npm 11.19 and npm 12.0.
  `@sebastienrousseau/noyalib-wasm` resumes on npm at 0.0.37; the
  0.0.35 package on npm lacks its bindings file and the 0.0.36 package
  was never published.

## Unchanged

- The core, the language server, the MCP server, the CLI and the
  serde-yaml shim carry no code change since v0.0.36. Their version
  moves so that `=0.0.37` names one known set.

## Upgrading

Bump every noyalib crate you use to `0.0.37`. npm users on 0.0.35 should
move to 0.0.37.
