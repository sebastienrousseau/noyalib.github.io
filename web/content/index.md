---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib — Fearless YAML parsing in pure Rust"
description: "The YAML 1.2 engine for Rust, WebAssembly and AI agents. Every official test case. Zero unsafe code. Six products at one version, drop-in to MCP server."
keywords: "noyalib, rust yaml, yaml parser rust, serde_yaml replacement, serde yaml archived, yaml 1.2 rust, yaml webassembly, yaml mcp server, yaml language server"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "index"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_home: "true"
banner: "freeman-zhou-oV9hp8wXkPE"
banner_alt: "A financial district skyline at dawn, mirrored in still water."
eyebrow: "noyalib"
headline: "Fearless YAML. Pure Rust."
lead: "The parser under your routing tables, your manifests and your pipelines. Every official test case. Zero unsafe code. One version across six products."
---

## Why noyalib

Configuration is code that nobody tests. It is read at start-up, trusted,
and acted on. When the parser gets it wrong, the failure looks like a
business decision. So the parser has to be right, every time, everywhere.

That is the whole idea behind noyalib. Start from the YAML 1.2
specification, not from a fork. Run every official test case on every
change, through every product. Forbid unsafe code and let the compiler
enforce it. Cap every limit a hostile document could exploit. Sign, attest
and inventory every release.

Then take that one parser everywhere people meet YAML. A Rust service. A
build pipeline. An editor. A browser tab. An AI assistant. Six products,
one engine, one version number.

## Two APIs. One parser.

The data-binding API reads YAML into typed Rust values through serde and
writes them back. It is the fast path, and what most services need.

The tooling API reads YAML into a tree that reproduces the source byte for
byte. Change one value and every other byte stays. The language server,
the agent server and every formatter in the family are built on it.

Both share one scanner and one set of limits. Coming from serde_yaml? The
[one-line migration](/migration/) keeps your source unchanged. Starting
fresh? The [developer docs](/docs/) show the native API in ten lines.
