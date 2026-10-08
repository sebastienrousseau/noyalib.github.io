---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.55: limits on every loader"
description: "Release notes for noyalib v0.0.55: every loader enforces every limit, long lines parse in linear time, and thirteen security advisories."
keywords: "noyalib v0.0.55, yaml security advisory, alias depth, quadratic parsing, billion laughs, json schema redos, mcp dns rebinding"
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
headline: "noyalib v0.0.55"
lead: "A security audit of v0.0.54 looked for any path where a limit held on one entry point and not on its sibling. This release closes every finding."
---

## What changed

After v0.0.53, a bug showed one entry point skipping budgets that the
others enforced. This release audited the whole family for the same
pattern and for anything else hostile input could reach. Four findings
were rated High and twenty-two Medium. Each fix landed with a test that
failed before it, and a table now checks every limit on every entry
point.

## Fixed

- **Every loader enforces every limit.** The borrowed API, the CST,
  `read_with_config`, the multi-document readers and values a typed
  target skips now charge the same budgets as `from_str`. A 540-byte
  billion-laughs document that the borrowed API used to expand is
  refused at once.
- **Aliases cannot build values deeper than `max_depth`.** A chain of
  anchors could build a value 10,000 levels deep from 22 KB and abort
  the process when it was dropped.
- **Long lines parse in linear time.** One long line of flow entries
  used to cost quadratic time before any budget could stop it.
- **Edits are depth-checked.** A deeply nested fragment passed to the
  CST editors no longer overflows the stack.
- **Output reads back as written.** Flow strings holding `,` or
  brackets, comments with line breaks, `<<` keys and verbatim tags now
  round-trip, and formatting hints can no longer be injected through
  tag names.
- **Schema validation is bounded.** Patterns use a linear-time engine,
  violations are capped, and external `$ref`s are refused.
- **The satellites are hardened.** The MCP server checks `Host` and
  `Origin` on its SSE transport, walks paths from a root handle, and
  keeps file permissions on writes. The CLI creates its temporary files
  exclusively. The wasm module refuses cyclic or very deep values
  instead of trapping, and the LSP server survives malformed frames.

## Security advisories

The fixes are published as GitHub security advisories against the
affected crates, all fixed in 0.0.55. The core's eight are listed on
[the noyalib advisories page](https://github.com/sebastienrousseau/noyalib/security/advisories).

## Upgrading

Bump every noyalib crate you use to `0.0.55`. Some input accepted before
is now refused:

- A verbatim tag `!<x>` names exactly the tag `x`, as YAML 1.2.2
  defines it.
- An implicit key holding a flow collection longer than 1024 characters
  is an error.
- A CST stream over a stream-wide budget is refused.
- Schemas with lookaround or backreferences need
  `CompiledSchemaBuilder::backtracking_patterns` to compile.
- Rust users of `noya-cli`: `NoyavalidateCli::file` is now
  `files: Vec<PathBuf>`. The command line is unchanged.
