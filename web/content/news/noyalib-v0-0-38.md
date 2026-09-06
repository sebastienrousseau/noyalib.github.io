---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.38 — every dependency pinned, on every workflow"
description: "Release notes for noyalib v0.0.38: the last unpinned npm commands leave the family's workflows, registry probes verify tarballs by hash, and satellite branch protection matches the core."
keywords: "noyalib v0.0.38, noyalib release notes, scorecard pinned dependencies, npm ci lockfile, branch protection"
author: "Sebastien Rousseau"
date: "2026-09-06"
news_publication_date: "2026-09-06"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · 6 September 2026"
headline: "noyalib v0.0.38"
lead: "The last unpinned commands leave the family's workflows. Registry probes now verify what they fetch by hash, and every satellite's main branch is protected the way the core's is."
---

## What changed

v0.0.38 answers the open OpenSSF Scorecard findings across the family.
No library code changed; every crate moves together so that `=0.0.38`
names one known set.

## Fixed

- **No more `npm install` in any workflow.** The core's registry drift
  net fetches the exact declared version of each npm package, verifies
  the tarball against the sha512 the registry publishes, unpacks it by
  hand and checks that the package carries every file its entry module
  imports. The wasm and MCP releases assert the runner's npm supports
  OIDC trusted publishing instead of upgrading it. The VS Code
  extension builds with `npm ci` from a committed lockfile.
- **Satellite branch protection matches the core**: strict status
  checks, signed commits, code-owner review, conversation resolution,
  admins included.

## Upgrading

Bump every noyalib crate you use to `0.0.38`. Nothing else changes.
