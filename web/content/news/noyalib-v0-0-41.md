---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.41: dependency bumps and a look back"
description: "Release notes for noyalib v0.0.41: the September GitHub Actions bumps across the family, and a look at the three defects the corpus tests caught in v0.0.40."
keywords: "noyalib v0.0.41, yaml formatter correctness, yaml serialiser tags, dependency updates"
author: "Sebastien Rousseau"
date: "2026-09-07"
news_publication_date: "2026-09-07"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · 7 September 2026"
headline: "noyalib v0.0.41"
lead: "A routine dependency release, and a good moment to say what the previous one actually fixed."
---

## What changed

v0.0.41 carries the September GitHub Actions updates across all seven
repositories, cherry-picked from Dependabot with authorship intact so
the family moves together rather than drifting one repository at a
time. No library code changed.

## What v0.0.40 fixed, and how

The previous release began as a version bump and became a correctness
release, because a coverage gate refused to pass. Closing that gap
meant running a corpus of twenty hand-written edge-case documents
through every entry point instead of only the parser. Three defects
came out of it, and each one silently changed what a document meant:

- **A mapping used as an explicit key was torn apart.** The lines under
  `? a: 1` were written at the outer indent, so they became entries of
  the surrounding mapping, and the value bound to that key was dropped.
- **A keep-chomped block scalar grew.** A block scalar's token carries
  the indentation of the line after it, so the formatter ended a line
  holding nothing but spaces. A `|+` scalar counts a blank line as
  content, so the value gained a newline every time the file was
  formatted.
- **A tag introduced by `%TAG` did not survive being written out.** It
  is held as a bare URI, and the serialiser wrote it as it stood, so
  reading the output back gave a plain scalar and the tag was gone.

All three are fixed. More usefully, the corpus now runs on every push:
every document that parses must survive the formatter and the
serialiser and come back as the same value, and the parallel and
streaming readers must agree with the batch loader on all 351 files of
the official test suite.

A test suite that only asks "does it parse" will not find any of this.

## Upgrading

Bump every noyalib crate you use to `0.0.41`.
