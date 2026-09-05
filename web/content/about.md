---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "About — who builds noyalib and why"
description: "noyalib is built by Sebastien Rousseau with contributors. Why it exists, how it is run, and what it will and will not do."
keywords: "about noyalib, sebastien rousseau, noyalib maintainer, noyalib governance"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_about: "true"
eyebrow: "About"
headline: "Who builds noyalib"
lead: "One maintainer, contributors, and a rule that every crate ships together."
---

## Why it exists

In March 2024 the crate most Rust projects used to read YAML was archived.
Thousands of builds kept depending on it, and the forks that appeared kept
its code and its gaps. noyalib started from the specification instead. The
goal was a parser that passes the official test suite with no skips, has no
unsafe code, and can be handed untrusted input without a crash.

The second goal was reach. A parser is only useful where people meet YAML,
and that is the editor, the build, the browser and, increasingly, an AI
agent. So the same parser ships as a language server, a command line, a
WebAssembly module and an MCP server, all at one version.

## Who

noyalib is maintained by [Sebastien Rousseau](https://sebastienrousseau.com/),
who also maintains a family of Rust crates and the
[AskISO](https://askiso.io/) ISO 20022 toolchain. Contributors are credited
in each release and in the repository history.

## How it is run

Decisions are made in the open on GitHub. The
[governance document](https://github.com/sebastienrousseau/noyalib/blob/main/GOVERNANCE.md)
says who can merge and how a disagreement is settled. The
[contributing guide](https://github.com/sebastienrousseau/noyalib/blob/main/CONTRIBUTING.md)
says what a pull request needs. Every commit is signed, every release is
signed and attested, and every gate that guards a release is in the
repository where anyone can read it.

Releases move by one patch number at a time, and all six crates move
together. There is no roadmap to a 1.0 that would let the version number say
more than the test suite does.

## What it will not do

noyalib does not round-trip comments through a typed struct, because the
YAML data model has no comments. It does not silently accept a document that
breaks a limit. It does not phone home, from the library, the tools or this
website. When another tool fits a job better, the
[README](https://github.com/sebastienrousseau/noyalib#when-not-to-use-noyalib)
says so.

## Get in touch

Questions go to [Discussions](https://github.com/sebastienrousseau/noyalib/discussions),
bugs to the issue tracker of the crate concerned, and security reports to
the private channel in the
[security policy](https://github.com/sebastienrousseau/noyalib/blob/main/SECURITY.md).
The [contact page](/contact/) lists all three.
