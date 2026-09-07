---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.39 — twenty documents that break parsers"
description: "Release notes for noyalib v0.0.39: twenty spec-torture documents cross-checked against libyaml and go-yaml, and the three parser defects they uncovered."
keywords: "noyalib v0.0.39, yaml edge cases, billion laughs yaml, norway problem yaml, yaml 1.2 core schema"
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
headline: "noyalib v0.0.39"
lead: "Twenty documents, each built to break one part of a YAML parser, are now fixtures. Three of them broke this one, and those defects are fixed."
---

## What changed

A reader sent twenty YAML documents designed to find the edges of the
specification. Every expectation for them was checked against libyaml
and go-yaml before it became a test, so the suite records what the
three implementations agree on and where they part company.

## Fixed

- **The parallel path counted one document too many** for any stream
  that opened with a comment, a blank line or a directive. The splitter
  treated that prologue as a document of its own, so it disagreed with
  the ordinary loader about the shape of the stream. A property test
  now holds the two to the same answer across every file of the
  official test suite and every fixture.
- **A self-referential anchor was described wrongly.** An alias
  pointing at an anchor still being built was reported as an unknown
  anchor defined "in an earlier document", which is nonsense in a
  single-document file. It now names the real limit: YAML's
  representation graph may be cyclic, and a parsed value is a tree.
- **An `!!int` in a YAML 1.1 spelling now explains itself.**
  `!!int 0b101010` answers "YAML 1.2 has no binary literal, `0b` was
  YAML 1.1; write 42".

## Where the implementations disagree

- **The billion-laughs payload**, seven levels of ten-fold alias
  expansion, is refused here in well under a second by the alias
  budget. Under a two-gigabyte cap libyaml exhausted memory and
  go-yaml had not finished after a minute.
- **The Norway problem.** Under YAML 1.2's core schema `NO`, `no`,
  `on`, `off`, `y`, `n` and `190:20:30` are all strings, and this
  release proves it case by case. libyaml still reads them the 1.1 way
  and turns `NO` into false and `190:20:30` into 685230.

## Upgrading

Bump every noyalib crate you use to `0.0.39`. No public API changed
shape.
