---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib v0.0.42: the editor extension ships"
description: "Release notes for noyalib v0.0.42: the VS Code extension is bundled, carries an icon and a licence, and the release can now publish it to the Marketplace."
keywords: "noyalib v0.0.42, vs code yaml extension, noyalib lsp, yaml language server"
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
headline: "noyalib v0.0.42"
lead: "The VS Code extension was built on every push and then went nowhere. It now has a path to the Marketplace."
---

## What changed

The language server has shipped a VS Code extension for several
releases. It was built on every push and uploaded as a build artefact,
which meant anyone who wanted it had to find a CI run, download a file
and install it by hand. Nothing ever published it. A Marketplace token
on its own would not have helped, because no step existed to use one.

## Fixed

- **The release can publish it.** A job in the language server's
  release workflow builds the extension on a tag, refuses to publish
  when the manifest and the tag disagree about the version, and
  tolerates a version already on the Marketplace so a re-run is safe.
- **The extension is bundled.** It shipped its whole dependency tree:
  322 files, 465 KB. It is now 9 files and 121 KB.
- **It has a licence the packager can see.** The repository carries
  `LICENSE-APACHE` and `LICENSE-MIT`, but the packaging tool only looks
  for `LICENSE`, `LICENSE.md` or `LICENSE.txt`, so the listing would
  have shown no licence at all.
- **It has an icon**, rather than a grey placeholder.

Nothing in the library changed. Every crate moves to 0.0.42 so the
family stays on one version.

## Installing it today

Until the listing goes live, the language server is one command away:

```sh
cargo install noyalib-lsp --locked
```

and the packaged extension is attached to every CI run.

## Upgrading

Bump every noyalib crate you use to `0.0.42`. No public API changed
shape.
