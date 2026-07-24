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
description: "noyalib is a high-performance data & YAML engine in Rust featuring zero-copy SIMD parsing, parallel Rayon streaming, 100% safe Rust, WebAssembly runtime, Model Context Protocol (MCP) AI server, and LSP support."
doc_url: "/installation/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Lightning-Fast Data & YAML Engine for Rust, WebAssembly & AI. Zero-copy SIMD scanning, parallel Rayon streaming, 100% safe Rust, MCP AI server, and LSP editor integration."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/index.html"
image_alt: "Logo of noyalib (NOYALIB), a high-performance Rust library dedicated to parsing, validating, manipulating, and formatting YAML and structured data"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib, rust, yaml parser, simd, rayon, zero copy, webassembly, mcp, lsp, serde, json schema, skeletonic css, sebastien rousseau"
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
subtitle: "Lightning-Fast Data & YAML Engine for Rust, WebAssembly & AI."
tags: "noyalib, rust, yaml, simd, rayon, safe-rust, mcp, lsp, webassembly, skeletonic"
theme_color: "rgb(99, 102, 241)"
title: "noyalib: Lightning-Fast Data & YAML Engine for Rust, WebAssembly & AI"
url: "https://noyalib.com/index.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

# RSS - The RSS feed front matter (YAML).

atom_link: "https://noyalib.com/rss.xml"
category: "Rust Programming, YAML Parser, SIMD Acceleration, WebAssembly, Model Context Protocol, Language Server Protocol, Data Parsing, Open Source"
docs: "https://validator.w3.org/feed/docs/rss2.html"
generator: "Shokunin SSG (version 0.0.46)"
item_description: "noyalib is a high-performance data & YAML engine in Rust featuring zero-copy SIMD parsing, parallel Rayon streaming, 100% safe Rust, WebAssembly runtime, Model Context Protocol (MCP) AI server, and LSP support."
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

# Welcome to noyalib

**noyalib** is a next-generation, high-performance data and YAML parsing engine engineered in 100% safe Rust. Built for mission-critical enterprise infrastructure, cloud-native services, edge WASM environments, and AI Model Context Protocol (MCP) integrations.

## Core Architectural Capabilities

### Zero-Copy SIMD Dispatch
Multi-byte SWAR, SSE2, and NEON vector scanning find structural delimiters in a single CPU pass with zero copy overhead.

### 100% Safe Rust Guarantee
Enforces `#![forbid(unsafe_code)]` across the entire workspace codebase, delivering rock-solid memory safety for untrusted inputs.

### Parallel Rayon Multi-Document Streaming
Pre-scans document boundaries and deserializes multi-document streams concurrently across all available CPU cores.

### JSON Schema 2020-12 Validation
Automatic JSON Schema codegen via `schemars` and real-time schema validation via `jsonschema` engine.

### Model Context Protocol (MCP) Server
Native MCP AI server tool allowing LLM models (Claude, GPT-4, Antigravity) to query, parse, and validate data streams.

### Language Server Protocol (LSP) Engine
Fault-tolerant `parse_lenient` error recovery engine powers live diagnostics, schema hover docs, and completion in VS Code and Neovim.

## Quick Installation

Add `noyalib` to your `Cargo.toml`:

```toml
[dependencies]
noyalib = { version = "0.0.16", features = ["simd", "rayon"] }
```

Install the command-line utility:

```shell
cargo install noya-cli
```

Install the WebAssembly package for browser & edge runtimes:

```shell
npm install noyalib-wasm
```

Install the MCP AI Server binary:

```shell
cargo install noyalib-mcp
```
