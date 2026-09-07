---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.40 — every crate is an OpenSSF passing project"
description: "Release notes for noyalib v0.0.40: all six crates in the family now hold the OpenSSF Best Practices passing badge, each answered from its own verified evidence."
keywords: "noyalib v0.0.40, openssf best practices badge, rust yaml supply chain, noyalib security"
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
headline: "noyalib v0.0.40"
lead: "The five companion crates joined the core as OpenSSF Best Practices passing projects. Every answer was written from that crate's own evidence."
---

## What changed

The core has held the OpenSSF Best Practices passing badge for months.
The five companion crates now hold it too, each at 100% of the passing
criteria. Their READMEs carry the badge beside the Scorecard one.

## Answered from evidence, not copied

The quick way to fill in five self-certifications is to copy the
core's and change the name. That would have been wrong. The core's
answers cite its own test count, its own release, its own documents,
and several of those statements are simply untrue of a companion
crate.

Every criterion was answered from the crate it describes: its own test
count, the number of checks that report on its default branch, the
number of issues it has closed, its own interface documentation, and
its own build file. Where a crate genuinely differs, the answer says
so. The command-line tools have no Makefile, so their build criterion
points at the manifest and the build script. The serde-yaml shim has
no coverage gate of its own, by design, because it is a thin
re-export layer over a core that is gated at 95%, and its answer says
exactly that rather than claiming a number it does not have.

A self-certification is a public claim. It is worth only as much as
its weakest sentence.

## Upgrading

Bump every noyalib crate you use to `0.0.40`. No public API changed
shape.
