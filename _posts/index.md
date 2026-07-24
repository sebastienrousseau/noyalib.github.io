---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "noyalib (NOYALIB), High-Performance Data & YAML Engine for Rust, WebAssembly & AI."
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 24, 2026"
description: "noyalib is an enterprise-grade data & YAML engine written in 100% safe Rust featuring zero-copy SIMD parsing, parallel Rayon streaming, WebAssembly runtime, Model Context Protocol (MCP) AI server, and LSP support."
doc_url: "/getting-started/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Enterprise-grade data & YAML engine for Rust, WebAssembly & AI. Zero-copy SIMD scanning, parallel Rayon streaming, 100% safe Rust, MCP AI server, and LSP editor integration."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/index.html"
image_alt: "Logo of noyalib (NOYALIB), a high-performance Rust library dedicated to parsing, validating, manipulating, and formatting YAML and structured data"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib, rust, yaml parser, simd, rayon, zero copy, webassembly, mcp, lsp, serde, json schema, skeletonic css, sebastien rousseau, enterprise data engine, docs.rs, crates.io"
language: "en-GB"
layout: "index"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib (NOYALIB)"
permalink: "https://noyalib.com/index.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Enterprise-Grade Data & YAML Engine for Rust, WebAssembly & AI."
tags: "noyalib, rust, yaml, simd, rayon, safe-rust, mcp, lsp, webassembly, skeletonic, enterprise, documentation"
theme_color: "rgb(99, 102, 241)"
title: "noyalib: Enterprise-Grade Data & YAML Engine for Rust, WebAssembly & AI"
url: "https://noyalib.com/index.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

# RSS - The RSS feed front matter (YAML).

atom_link: "https://noyalib.com/rss.xml"
category: "Rust Programming, YAML Parser, SIMD Acceleration, WebAssembly, Model Context Protocol, Language Server Protocol, Enterprise Infrastructure, Open Source"
docs: "https://validator.w3.org/feed/docs/rss2.html"
generator: "Shokunin SSG (version 0.0.46)"
item_description: "noyalib is an enterprise-grade data & YAML engine in Rust featuring zero-copy SIMD parsing, parallel Rayon streaming, 100% safe Rust, WebAssembly runtime, Model Context Protocol (MCP) AI server, and LSP support."
item_guid: "https://noyalib.com/rss.xml"
item_link: "https://noyalib.com/rss.xml"
item_pub_date: "2026-07-24T18:00:00+00:00"
item_title: "Shokunin - RSS Feed"
last_build_date: "2026-07-24T18:00:00+00:00"
managing_editor: "contact@noyalib.com"
pub_date: "2026-07-24T18:00:00+00:00"
ttl: "60"
type: "website"
webmaster: "contact@noyalib.com"

# Apple - The Apple front matter (YAML).

apple_mobile_web_app_orientations: "portrait"
apple_touch_icon_sizes: "192x192"
apple-mobile-web-app-capable: "yes"
apple-mobile-web-app-status-bar-inset: "black"

---

# Enterprise-Grade Data & YAML Engine for Rust, WebAssembly & AI

Welcome to the official portal for **noyalib**, an open-source, high-performance data parsing engine engineered in 100% safe Rust. Built for production microservices, AI Model Context Protocol (MCP) pipelines, edge WebAssembly runtimes, and enterprise IDE extensions.

---

## Architectural Deep Dive

### 1. Zero-Copy SIMD Dispatch Engine
By incorporating SWAR (Simd Within A Register) and SSE2/NEON vectorization primitives, noyalib scans structural delimiters in single CPU cycles. Payload parsing reaches **520 MB/s**, delivering a **7.6x throughput improvement** over legacy `serde_yaml` implementations.
- Read full documentation on [Docs.rs/noyalib](https://docs.rs/noyalib).
- View published package on [Crates.io/crates/noyalib](https://crates.io/crates/noyalib).

### 2. Guaranteed Memory Safety (`#![forbid(unsafe_code)]`)
Security-critical environments cannot afford memory corruption or buffer overrun risks. noyalib enforces `#![forbid(unsafe_code)]` strictly across its main crate and satellite dependencies.
- Inspect security invariants in the [noyalib GitHub Repository](https://github.com/sebastienrousseau/noyalib).

### 3. Multi-Core Parallel Document Streaming
Multi-document streams are pre-scanned at boundary markers (`---`) and deserialized concurrently across CPU threads via Rayon.

---

## Complete Satellite Libraries Directory

### 📦 `noyalib` (Core Rust Library)
The foundational engine for high-speed YAML and structured data parsing.
- **Official Docs**: [Docs.rs Documentation](https://docs.rs/noyalib)
- **Crates.io**: [noyalib on Crates.io](https://crates.io/crates/noyalib)
- **Source Code**: [GitHub Repository](https://github.com/sebastienrousseau/noyalib)

### 🖥️ `noya-cli` (Command-Line Utility)
Terminal binary for querying, formatting, schema validation, and streaming data conversion.
- **Official Docs**: [Docs.rs Documentation](https://docs.rs/noya-cli)
- **Crates.io**: [noya-cli on Crates.io](https://crates.io/crates/noya-cli)
- **Source Code**: [GitHub Repository](https://github.com/sebastienrousseau/noya-cli)

### 🌐 `noyalib-wasm` (WebAssembly Runtime)
WebAssembly package optimized for browsers, Node.js, and Cloudflare Workers.
- **NPM Package**: [noyalib-wasm on NPM](https://www.npmjs.com/package/noyalib-wasm)
- **Source Code**: [GitHub Repository](https://github.com/sebastienrousseau/noyalib-wasm)

### 🤖 `noyalib-mcp` (Model Context Protocol AI Server)
Native MCP server integration exposing data validation tools to Claude, GPT-4, and AI agents.
- **Official Docs**: [Docs.rs Documentation](https://docs.rs/noyalib-mcp)
- **Glama MCP Registry**: [noyalib-mcp on Glama](https://glama.ai/mcp/servers/sebastienrousseau/noyalib-mcp)
- **Source Code**: [GitHub Repository](https://github.com/sebastienrousseau/noyalib-mcp)

### ⚙️ `noyalib-lsp` (Language Server Protocol)
LSP server powering VS Code autocompletion, schema hovers, and `parse_lenient` diagnostics.
- **Official Docs**: [Docs.rs Documentation](https://docs.rs/noyalib-lsp)
- **Crates.io**: [noyalib-lsp on Crates.io](https://crates.io/crates/noyalib-lsp)
- **Source Code**: [GitHub Repository](https://github.com/sebastienrousseau/noyalib-lsp)

---

## Sebastien Rousseau Open Source Rust Suite

Explore published documentation for the broader Rust ecosystem:

- **`dtt`** (DateTime): [Official Site](https://dttlib.com) • [Docs.rs](https://docs.rs/dtt) • [Crates.io](https://crates.io/crates/dtt) • [GitHub](https://github.com/sebastienrousseau/dtt)
- **`kyberlib`** (Post-Quantum Cryptography): [Official Site](https://kyberlib.com) • [Docs.rs](https://docs.rs/kyberlib) • [Crates.io](https://crates.io/crates/kyberlib) • [GitHub](https://github.com/sebastienrousseau/kyberlib)
- **`hsh`** (Cryptographic Hashes): [Official Site](https://hshlib.com) • [Docs.rs](https://docs.rs/hsh) • [Crates.io](https://crates.io/crates/hsh) • [GitHub](https://github.com/sebastienrousseau/hsh)
- **`rlg`** (Structured Logging): [Official Site](https://rustlogs.com) • [Docs.rs](https://docs.rs/rlg) • [Crates.io](https://crates.io/crates/rlg) • [GitHub](https://github.com/sebastienrousseau/rlg)
- **`vrd`** (Random Generator): [Official Site](https://vrdlib.com) • [Docs.rs](https://docs.rs/vrd) • [Crates.io](https://crates.io/crates/vrd) • [GitHub](https://github.com/sebastienrousseau/vrd)
- **`libmake`** (Crate Generator): [Official Site](https://libmake.com) • [Docs.rs](https://docs.rs/libmake) • [Crates.io](https://crates.io/crates/libmake) • [GitHub](https://github.com/sebastienrousseau/libmake)
