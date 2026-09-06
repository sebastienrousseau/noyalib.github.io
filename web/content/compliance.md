---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "Compliance — what noyalib gives your audit"
description: "The artefacts a regulated buyer asks for, in every noyalib release: a CycloneDX SBOM, SLSA level 3 provenance, sigstore signatures, vetted dependencies."
keywords: "noyalib compliance, cyber resilience act sbom, slsa provenance rust crate, memory safe yaml parser, cargo vet audit, software supply chain yaml"
author: "Sebastien Rousseau"
date: "2026-09-06"
news_publication_date: "2026-09-06"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "corporate-finance"
banner_alt: "Financial reports and a tablet on a meeting-room table."
nav_compliance: "true"
eyebrow: "Compliance"
headline: "The evidence your audit asks for. In every release."
lead: "From December 2027 the EU Cyber Resilience Act requires a software bill of materials for every product with digital elements. Every noyalib release has shipped one for a year."
---

## What every release carries

| Artefact | What it is | Where |
|---|---|---|
| Software bill of materials | CycloneDX, listing every dependency of the published crate, signed | `SBOM.cdx.json` on each [GitHub release](https://github.com/sebastienrousseau/noyalib/releases) |
| Build provenance | SLSA level 3 attestation of how and where each artefact was built | Attached to each release; verify with `gh attestation verify` |
| Signatures | sigstore keyless signatures on every artefact, plus a GPG signature | `.bundle` and `.asc` files beside each artefact |
| Signed commits | Every commit on the main branch is signed and verified | Branch protection requires it |
| Dependency audit trail | Every dependency audited or exempted on record, checked on every push | `supply-chain/` in the repository, `cargo vet` |
| Licence inventory | REUSE 3.3 compliant: every file carries its licence and copyright | `reuse lint` in CI |

The [verification guide](https://github.com/sebastienrousseau/noyalib/blob/main/pkg/VERIFY.md)
gives the commands. Each takes under a minute and needs no account.

## Memory safety, enforced rather than promised

Regulators asked software makers for memory-safety roadmaps by January
2026. noyalib's roadmap is the whole codebase: every crate root carries
`#![forbid(unsafe_code)]`, so the compiler refuses an unsafe block before
a review could miss one. Miri checks the parser for undefined behaviour
on every pull request, and fifteen fuzz targets run on every push.

The resource limits that stop a hostile document, nesting depth, alias
expansion, node count and input size, are decided by functions that are
machine-checked with Kani. The proofs run in CI. They show the checks are
exact, that they never panic, and that no input can wrap a counter back
under its limit.

## What the family measures

A script in the core runs 131 probes across the six repositories on
demand: tests, lints, audits, signed releases, SBOMs, pinned actions and
the state of the main branch. The latest run scored A+ at 97.9%. The
[conformance page](/conformance/) carries the table, and the
[ecosystem document](https://github.com/sebastienrousseau/noyalib/blob/main/docs/ECOSYSTEM.md)
the full record.

## Answering a security questionnaire

The questions a procurement review asks, with the short answer and where
the evidence lives:

- **Does the product publish an SBOM?** Yes, CycloneDX, per release, signed.
- **Is the build reproducible and attested?** SLSA level 3 provenance per release.
- **Are dependencies reviewed?** Every one is audited or exempted on record with cargo-vet, and cargo-deny checks advisories, licences and sources on every push.
- **Is the code memory safe?** No unsafe code, enforced by the compiler; Miri and fuzzing on every change.
- **Is there a disclosure process?** Yes: the [security policy](https://github.com/sebastienrousseau/noyalib/blob/main/SECURITY.md) names the private channel and the response time.
- **What licence?** Apache-2.0 or MIT, at your option, with no account, key or licence server.

## External assessments

- [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/noyalib)
- [OpenSSF Best Practices](https://www.bestpractices.dev/projects/13057), passing
- [Security and supply chain](/security/) on this site
