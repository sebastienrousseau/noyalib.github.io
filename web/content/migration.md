---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Replace serde_yaml with one line — noyalib migration"
description: "serde_yaml is archived. Rename the package to noyalib-serde-yaml in Cargo.toml and keep every call site. Guides cover serde_yml, serde-yaml-ng and more."
keywords: "serde_yaml replacement, serde_yaml archived, serde_yaml alternative, migrate from serde_yaml, serde_yml deprecated, serde-yaml-ng, serde-norway, noyalib-serde-yaml"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_migration: "true"
banner: "corporate-finance"
banner_alt: "Financial reports and a tablet on a meeting-room table."
eyebrow: "noyalib-serde-yaml"
headline: "serde_yaml. Without the archive notice."
lead: "One line in Cargo.toml. Zero changes to your source. Same functions, same errors, same behaviour, pinned by a contract suite captured from the original."
---

## The one-line version

Rename the package in Cargo.toml and change nothing else:

```toml
[dependencies]
serde_yaml = { package = "noyalib-serde-yaml", version = "=0.0.37" }
```

Your code still says `serde_yaml::from_str` and `serde_yaml::to_string`, and
it still gets `serde_yaml::Value`, `Mapping`, `Number` and the rest. The shim
parses under a compatibility profile that matches the original's choices, and
it renders errors in the same words. An 18-case contract suite, captured live
from `serde_yaml` 0.9, pins that behaviour on every release.

The pin is exact on purpose. The shim releases in lockstep with the core at
the same version, so `=0.0.37` names one known pair.

## What stays the same, and what does not

Three behaviours differ from the archived crate, and each defaults to the
safer side:

- **Non-scalar mapping keys are refused**, with the same "expected a string
  key" error `serde_yaml` 0.9 gave. That is the contract, not a gap.
- **Custom tags are preserved** through the `Value` path instead of being
  dropped. A typed deserialise still ignores them.
- **Size and nesting limits are on by default.** A document with millions of
  aliases or a thousand levels of nesting is an error, not an out-of-memory
  crash. The limits are configurable.

The [full guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-SERDE-YAML.md)
lists every function with its replacement and every note in detail.

## Coming from a fork

The forks that appeared after the archive each need a slightly different
route. Each guide has a TL;DR diff, a function table and a checklist.

| Coming from | Drop-in? | Guide |
|---|---|---|
| `serde_yml` (marked deprecated) | Mostly | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-SERDE-YML.md) |
| `yaml_serde` | Yes, by package rename | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-YAML-SERDE.md) |
| `serde-yaml-ng` | Yes | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-SERDE-YAML-NG.md) |
| `serde-norway` | Yes | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-SERDE-NORWAY.md) |
| `serde-yaml-bw` | No, different `Value` | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-SERDE-YAML-BW.md) |
| `serde-saphyr` | No, streaming only | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-SERDE-SAPHYR.md) |
| `yaml-spanned` | No, read only | [Guide](https://github.com/sebastienrousseau/noyalib/blob/main/docs/MIGRATION-FROM-YAML-SPANNED.md) |

## Moving to the native API later

When you want spans, strict typo detection, the lossless editor or the async
parser, switch the import to `noyalib` and keep the same call shapes. Nothing
forces the move, and the shim is maintained for as long as the core is.
