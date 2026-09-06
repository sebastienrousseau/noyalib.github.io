---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Security and supply chain — noyalib"
description: "No unsafe code, limits for untrusted input, signed and attested releases, SBOMs, cargo-deny, cargo-vet and a private reporting channel."
keywords: "noyalib security, rust yaml security, yaml billion laughs, slsa provenance, sigstore, sbom, cargo vet, cargo deny"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_security: "true"
banner: "getty-images-f9bcOaV5zbU"
banner_alt: "Looking up between financial district towers against a clear sky."
eyebrow: "Security"
headline: "Safe to hand untrusted input. Safe to depend on."
lead: "A parser sits between the network and your program. These are the measures that keep that seat honest."
---

## Handling hostile documents

The classic attacks on a YAML parser are aliases that expand into gigabytes,
nesting that overflows the stack, and documents that never end. noyalib
counts alias occurrences, caps nesting depth, bounds the node count and the
input size, and treats each limit as an error. The defaults are on without
configuration, and each can be raised or lowered per parser.

No code path is unsafe. The compiler enforces `#![forbid(unsafe_code)]` in
every crate, and Miri checks the parser for undefined behaviour on every
pull request. Fifteen fuzz targets run on every push.

## Releases you can verify

Every release attaches a cosign keyless signature and a SLSA level 3
attestation to each binary, a GPG signature, and a CycloneDX software bill of
materials. The
[verification guide](https://github.com/sebastienrousseau/noyalib/blob/main/pkg/VERIFY.md)
gives the commands. Commits on the main branches are signed, and a CI job
refuses a pull request whose commits are not.

## Dependencies

`cargo-deny` checks advisories, licences, bans and sources on every push.
`cargo-vet` records an audit or an exemption for every dependency and fails
when one appears that has neither. `cargo-machete` refuses an unused one.
The library's default profile carries eight runtime dependencies; the
minimal profile carries five.

Every GitHub Action the family uses is pinned to a commit, not a tag. The
family scorecard counts them: 135 of 135 at the last run.

## Reporting a problem

Please report a security issue privately. The
[security policy](https://github.com/sebastienrousseau/noyalib/blob/main/SECURITY.md)
gives the address, the response time you can expect, and how disclosure is
handled. Advisories are published through GitHub and the RustSec database.

## What the website does

This site is static files with a strict content security policy. It loads
nothing from a third party, sets no cookies and runs no analytics. The
playground runs the parser inside your tab and sends nothing anywhere.
