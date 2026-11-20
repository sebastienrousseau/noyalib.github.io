---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.63: CST inserts that read back"
description: "Release notes for noyalib v0.0.63: the lossless editor double-quotes a multi-line string the parser refuses as a block scalar, so the insert reads back."
keywords: "noyalib v0.0.63, cst, lossless editing, block scalar, c1 control, byte order mark"
author: "Sebastien Rousseau"
date: "2026-11-20"
news_publication_date: "2026-11-20"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · November 2026"
headline: "noyalib v0.0.63"
lead: "This release fixes one lossless edit: inserting a multi-line string that holds certain control characters now works again."
---

## What changed in v0.0.63

- **CST inserts read back again.** Since v0.0.62 the parser refuses a
  C1 control other than NEL, U+FFFE, U+FFFF and a byte order mark inside
  a block scalar. `Document::insert_entry_value` still wrote a
  multi-line string holding one of them as a `|` block, so the edit
  failed its own read-back check and the document stayed unchanged.
  Such a string is now double-quoted, as `to_string` already wrote it.
  @zoosky reported and fixed it
  ([#533](https://github.com/sebastienrousseau/noyalib/issues/533)).

Nothing else changes in how documents parse or print, and the Rust
1.89.0 minimum stays the same.

## Upgrading

Bump every noyalib crate you use to `0.0.63`; the family releases in
lockstep and each satellite pins the core at exactly `=0.0.63`.
