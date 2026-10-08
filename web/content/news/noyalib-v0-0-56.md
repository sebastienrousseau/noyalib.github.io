---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.56: no value too deep to drop"
description: "Release notes for noyalib v0.0.56: a nesting ceiling on every path, early max_events refusal, the MCP npm wrapper, and CVE requests for the advisories."
keywords: "noyalib v0.0.56, yaml nesting limit, max_events, serde_yaml duplicate field, noyalib-mcp npx, cve"
author: "Sebastien Rousseau"
date: "2026-10-08"
news_publication_date: "2026-10-08"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · October 2026"
headline: "noyalib v0.0.56"
lead: "This release closes the last open items of the v0.0.54 security audit and ships the MCP server on npm."
---

## What changed

v0.0.55 fixed every finding of the audit. A few hardening items were
left open because the obvious fix would have broken the public API.
This release closes them without that break.

## Fixed

- **No value too deep to drop.** Dropping, cloning, printing or
  serializing a value recurses once per level. Nesting is now capped at
  256 levels on every path, even when `max_depth` is raised, and a value
  read from another serde format stops there too, so none of those
  operations can overflow a small thread stack.
- **`max_events` holds before buffering.** A key inside a flow mapping
  may be any length, so the scanner used to tokenise a long one whole
  before the event budget could refuse it. It now stops as soon as the
  backlog proves the document is over budget.
- **The serde_yaml shim matches upstream on repeated struct fields.** It
  now refuses ``duplicate field `k` `` as serde_yaml 0.9 does.
- **The MCP server is on npm.** `npx @sebastienrousseau/noyalib-mcp`
  downloads the binary for your platform and runs it only if its
  checksum matches the one published with the package.

## Security advisories

The fourteen advisories published for noyalib, noyalib-mcp,
noyalib-wasm and noya-cli have CVE requests filed with GitHub. Each
advisory page shows its CVE once it is assigned.

## Upgrading

Bump every noyalib crate you use to `0.0.56`. Input nested deeper than
256 levels is now refused whatever `max_depth` says, and the serde_yaml
shim refuses documents that repeat a struct field. The VS Code
extension needs VS Code 1.91 or later.
