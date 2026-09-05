---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Frequently asked questions — noyalib"
description: "Short answers about noyalib: how it compares with serde_yaml and its forks, what it does with comments, tags and YAML 1.1, and how fast it is."
keywords: "noyalib faq, serde_yaml vs noyalib, yaml comments rust, yaml 1.1 norway problem, yaml custom tags rust"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_faq: "true"
eyebrow: "Questions"
headline: "Frequently asked questions"
lead: "The short answers. Each links to the longer one where there is more to say."
---

## Choosing it

### Is noyalib a drop-in replacement for serde_yaml?

Yes, through `noyalib-serde-yaml`. Rename the package in Cargo.toml and keep
every call site. The [migration page](/migration/) shows the one line and the
three behaviours that differ.

### How is it different from the serde_yaml forks?

The forks kept the original code and its gaps. noyalib was written from the
specification and passes all 406 official test cases with no skips. It has
no unsafe code, documented limits for untrusted input, a lossless editor and
a language server, an MCP server and a WebAssembly build that share the
parser.

### How fast is it?

Faster than every other pure-Rust YAML crate on every deserialise fixture
measured, by 1.1 to 2 times, and 3 to 4 times faster at serialising than the
closest maintained fork. The
[benchmarks](https://github.com/sebastienrousseau/noyalib/blob/main/docs/BENCHMARKS.md)
disclose the host, toolchain and command.

### What does it need?

Rust 1.86 or newer. It builds on Linux, macOS and Windows, and for `no_std`
targets with an allocator. The default profile has eight runtime
dependencies; the minimal profile has five.

## Using it

### Does it keep comments?

Through the lossless editor, yes: `cst::Document` reproduces the source byte
for byte and rewrites only what you change. Through the typed API, no. The
YAML data model has no comments, so no library can round-trip them through a
struct.

### What happens to custom tags?

They are kept. `from_str::<Value>` returns a tagged value with the tag name
and the payload. A typed deserialise ignores the tag, and `untag` strips
every tag for a plain JSON view. The WebAssembly `parseJson` does the same.

### Does it handle the Norway problem?

By default `no` is a string, as YAML 1.2 requires. A YAML 1.1 preset turns
on the old rules for booleans, octal numbers and sexagesimal values when a
legacy file needs them.

### Can it read several documents from one file?

Yes. `load_all` returns every document in a stream, and the parallel parser
splits large streams across threads. The language server and the CLI
understand multi-document files too.

## Trusting it

### Is it safe on untrusted input?

That is the design goal. Nesting depth, alias count, node count and input
size are capped by default, and each cap is an error rather than a crash.
There is no unsafe code, and fuzzing and Miri run on every change. The
[security page](/security/) has the details.

### Who maintains it?

Sebastien Rousseau, with contributors. The six crates release together at
one version. The [about page](/about/) says more, and the
[governance document](https://github.com/sebastienrousseau/noyalib/blob/main/GOVERNANCE.md)
says how decisions are made.

### What licence is it under?

Apache-2.0 or MIT, at your option, for every crate.
