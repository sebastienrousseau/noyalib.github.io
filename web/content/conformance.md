---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Conformance evidence — what noyalib measures on every change"
description: "406 of 406 official YAML test cases through six entry points, zero unsafe code, fifteen fuzz targets, Miri, and a 131-probe family scorecard rated A+."
keywords: "yaml test suite conformance, noyalib conformance, yaml 1.2 compliance rust, fuzzing yaml parser, miri, openssf scorecard"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_conformance: "true"
banner: "chart-purple"
banner_alt: "A chart drawn in blue over a dark background."
eyebrow: "Evidence"
headline: "Measured. Not asserted."
lead: "Every figure on this page comes from a command in a repository. If a number changed, a gate has already failed."
---

## The official test suite

The YAML project publishes the [yaml-test-suite](https://github.com/yaml/yaml-test-suite),
406 cases: valid documents with the JSON they must produce, and invalid
documents that must be refused. The core vendors the suite and runs all of it
on every push with no skip list. The result is 406 of 406, and every crate in
the family claims nothing more than what its own run of that suite shows.

Since September 2026 the same cases run through every companion crate's own
surface, from the same vendored suite at the same core commit:

| Entry point | Result | Outside its contract |
|---|---|---|
| `noyalib` library, JSON projection | 406 of 406 | none |
| `noyavalidate` exit code | 406 of 406 | none |
| `noyalib-lsp` diagnostics | 406 of 406 | none |
| `noyalib-mcp` tool result | 195 of 195 addressable | 211 cases have no top-level key to read |
| `noyalib-serde-yaml` shim | 367 of 367 | 24 multi-document cases, 15 non-scalar keys the original also refused |
| `noyalib-wasm` JSON model | 382 of 382 | 24 multi-document cases; `parse` is single-document |

This site checks its own claim. `make suite` starts the same server the
browser gates use, runs every case of the suite through the WebAssembly bundle
under `/wasm/` (the bytes a visitor's browser downloads), and fails if the
result differs from the row above. `make wasm-provenance` fails unless that
bundle is the published `@sebastienrousseau/noyalib-wasm` package for this
release, byte for byte, verified against the hash the npm registry publishes.
Both run on every push.

Since v0.0.36 every valid case also runs as a multi-document stream with a
known-bad document injected first, in the middle and last: 7,488 streams whose
error must land on the injected byte in every entry point. Since v0.0.38 a
two-document configuration that uses most of YAML at once (anchors and merge
keys at two depths, explicit tags including `!!pairs`, literal and folded block
scalars, a sequence as a mapping key) runs through every crate and is the
[playground](/playground/)'s second example.

The first run of that gate found two real defects: the language server
flagged valid multi-document files, and the MCP server reported a key with an
empty value as missing. Both were fixed before the next release. Reproduce
any row with `cargo test --test yaml_test_suite` in that crate.

## Memory safety

Every crate root carries `#![forbid(unsafe_code)]`, so the compiler refuses
any unsafe block. The parser is also run under Miri, which checks for
undefined behaviour the compiler cannot see, on every pull request.

## Fuzzing

Fifteen libFuzzer targets cover the scanner, the parser, the serialiser, the
lossless editor, the schema validator and the round trip through `Value`.
Two of them build without the standard library, so the `no_std` path is
fuzzed too. Each push replays the seed corpus; a weekly job runs for longer.
The unterminated-tag bug fixed in v0.0.34 was found by that fuzzer in its
first minute.

## Limits for untrusted input

Nesting depth, alias count, alias-to-anchor ratio, node count and document
size all have defaults, and each is an error rather than a crash when it is
exceeded. The limits are configurable per parser. The
[policies document](https://github.com/sebastienrousseau/noyalib/blob/main/docs/POLICIES.md)
lists them.

## Head-to-head with serde-saphyr

serde-saphyr is the other pure-Rust crate that passes the full official
test suite, so it is the comparison that matters. One criterion run, one
host, every crate in the same session (`make bench-compare` in the core;
host and toolchain are disclosed in the benchmarks document):

| Fixture | noyalib | serde-saphyr 1.2.0 | noyalib faster by |
|---|---:|---:|---:|
| Deserialise simple | 2.15 µs | 5.49 µs | 2.6× |
| Deserialise nested | 13.3 µs | 38.3 µs | 2.9× |
| Deserialise large list | 1.09 ms | 3.10 ms | 2.8× |
| Deserialise GitHub Actions workflow | 76.7 µs | 250 µs | 3.3× |

## The family scorecard

A script in the core runs 131 probes across the six repositories: tests,
lints, formatting, audits, vetting, REUSE compliance, strict docs, README
examples, pinned actions, signed releases, SBOMs, open alerts and the state
of the main branch. The latest run scored A+ at 97.9%. Rerun it with
`scripts/ecosystem-scorecard.sh`; the
[ecosystem document](https://github.com/sebastienrousseau/noyalib/blob/main/docs/ECOSYSTEM.md)
holds the full table.

## External checks

- [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/noyalib)
- [OpenSSF Best Practices](https://www.bestpractices.dev/projects/13057), passing
- [Benchmarks](https://github.com/sebastienrousseau/noyalib/blob/main/docs/BENCHMARKS.md) with host, toolchain and command disclosed
