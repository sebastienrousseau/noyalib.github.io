---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.54: safer defaults for untrusted input"
description: "Release notes for noyalib v0.0.54: bounded readers, an MCP server confined to one directory and strict by default, and atomic writes in the CLI."
keywords: "noyalib v0.0.54, mcp root confinement, strict yaml profile, duplicate keys, atomic write, from_reader limit"
author: "Sebastien Rousseau"
date: "2026-10-07"
news_publication_date: "2026-10-07"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · October 2026"
headline: "noyalib v0.0.54"
lead: "This release follows up the v0.0.53 budget fix. Every way into the family that reads input it did not write now treats that input as untrusted."
---

## What changed

v0.0.53 made the streaming deserializer honour every parser budget. An
audit of the rest of the family looked for other places where input from
outside could reach further than it should. It found three, and this
release closes all of them.

## Changed

- **Readers stop at the size limit.** `from_reader` and its variants used
  to read the whole source into memory before checking
  `max_document_length`. They now stop one byte past the limit, so an
  endless or hostile stream fails fast instead of filling memory.
- **The MCP server stays in one directory.** Its file tools resolve every
  path against a root, the working directory or `--root`, and refuse
  anything outside it. A symbolic link that points out counts as out.
- **The MCP server parses strictly.** `noyalib_parse` and
  `noyalib_validate` use the strict YAML 1.2 profile by default. A
  duplicate key is an error, not a silent overwrite.
- **The CLI writes in one step.** `noyafmt --write` and
  `noyavalidate --fix` write to a temporary file and rename it over the
  original, keeping its permissions. `noyavalidate --strict` is new.
- **Release pages follow one shape.** Every release in the family now
  opens with written highlights, then the merged changes and a checksum
  for every file.

## Upgrading

Bump every noyalib crate you use to `0.0.54`. The library's API is
unchanged. Two MCP changes can refuse what was accepted before. If a
client edits files outside the server's working directory, start it with
`--root`. If a client relies on duplicate keys or YAML 1.1 booleans, start
it with `--profile standard`.
