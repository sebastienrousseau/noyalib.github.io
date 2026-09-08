---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.43: a publish step that will not rot"
description: "Release notes for noyalib v0.0.43: the VS Code publish step stops parsing error text, and the deadline on its credential is written down where it matters."
keywords: "noyalib v0.0.43, vsce skip-duplicate, vs code trusted publishing, azure devops pat retirement"
author: "Sebastien Rousseau"
date: "2026-09-08"
news_publication_date: "2026-09-08"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
banner: "rosette"
banner_alt: "The noyalib rosette mark on a dark ground."
eyebrow: "Release · 8 September 2026"
headline: "noyalib v0.0.43"
lead: "The previous release gave the editor extension a way to ship. This one makes sure that way keeps working."
---

## What changed

v0.0.42 gave the VS Code extension a path to the Marketplace. This
release tightens two things in it, after reading what the publishing
tool actually supports rather than assuming.

## Fixed

- **No more parsing error text.** Re-running a tag was made harmless by
  searching the failure output for the words "already exists". That
  works until the Marketplace rewords its message, at which point a
  re-run starts failing releases for no reason. The tool has a
  `--skip-duplicate` flag for precisely this case, so it now uses it.
- **The extension manifest was a release behind.** The publish step
  refuses to run when the manifest and the tag disagree about the
  version, which is the right check, and it would have caught this at
  the last possible moment. The version bump now covers the manifest.

## The part worth knowing about

Publishing authenticates with an Azure DevOps personal access token,
and those tokens are on a clock. Azure retires the "all accessible
organizations" kind, which is the kind the Marketplace requires, on
**1 December 2026**.

There are two successors. Neither is ready:

- **Trusted publishing** is the good one. The CI system proves its own
  identity, exchanges that proof for a credential that lives for
  minutes, and nothing is stored anywhere. It is the destination. But
  the flag is still hidden in pre-release builds of the publishing
  tool.
- **Entra ID** works today, but wants a service principal and a
  federated credential set up first.

Rather than leave that in a chat log, the release workflow now carries
the deadline and both options as a comment at the exact line that has
to change.

## Upgrading

Bump every noyalib crate you use to `0.0.43`. No public API changed
shape, and no library code changed at all.
