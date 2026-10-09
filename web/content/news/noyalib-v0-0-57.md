---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.57: closer to the spec"
description: "Release notes for noyalib v0.0.57: six parse fixes found by differential fuzzing, typed keys read as written, and safer CST edits."
keywords: "noyalib v0.0.57, yaml spec conformance, differential fuzzing, serde_yaml_ng, libyaml, yaml 1.1 on key"
author: "Sebastien Rousseau"
date: "2026-10-09"
news_publication_date: "2026-10-09"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · October 2026"
headline: "noyalib v0.0.57"
lead: "This release brings noyalib's reading of YAML closer to the 1.2 spec, found by fuzzing it against serde_yaml_ng and libyaml."
---

## What changed

Seven rounds of differential fuzzing compared noyalib with serde_yaml_ng
and libyaml on the same inputs. Where the two disagreed and the spec
sided with the others, noyalib changed; where the spec sided with
noyalib, the case is now pinned in its test suite.

## Fixed

- **A trailing space no longer ends a plain scalar.** A plain scalar
  whose line ended in a space or tab could not continue on the next
  line, so `m ` followed by `x` was a parse error. It now reads `m x`.
- **An anchor on an empty list item keeps the next item.** `- &a`
  followed by `- x` used to nest the second item under the first. It
  now reads as two items.
- **Typed parses read keys as written.** A tag elsewhere in a document
  no longer changes how a typed parse spells a key, so a YAML 1.1 `on:`
  key reaches a struct field named `on`. Duplicate-key checks treat
  `~` and `null`, or `0x1F` and `31`, as one key on every path.
- **Safer CST edits.** `cst::format` keeps NEL, NBSP and other Unicode
  spaces that YAML reads as content, and two fixes from @zoosky make
  removing or overwriting an alias-valued entry act on the right bytes.

## Upgrading

Bump every noyalib crate you use to `0.0.57`. Five parse changes can
change what a document loads as: `0X1F` and `0x-1` load as strings,
folded scalars keep whitespace-only lines indented past their content,
a control character in a comment is an error, empty lines after an
escaped line break are line feeds, and an anchored empty list item no
longer absorbs the next item.
