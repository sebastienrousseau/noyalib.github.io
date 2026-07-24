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
doc_url: "/getting-started/index.html"
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

**noyalib** is a next-generation, high-performance data and YAML parsing engine engineered in 100% safe Rust. Designed for cloud-native applications, financial infrastructure, edge WASM execution, and AI Model Context Protocol (MCP) tool pipelines.

## Architectural Highlights

### 1. Zero-Copy SIMD Dispatch Engine
noyalib incorporates multi-byte SWAR (Simd Within A Register), SSE2, and ARM NEON vectorization primitives. Structural tokens like colons, hyphens, brackets, and document boundaries (`---`) are located in a single CPU scan pass with zero intermediate heap allocations.

### 2. Guaranteed Memory Safety (`#![forbid(unsafe_code)]`)
Unlike C-based parser shims or unsafe Rust abstractions, noyalib enforces `#![forbid(unsafe_code)]` strictly across the main crate and satellite libraries. Untrusted payloads are processed with complete panic safety and zero buffer overrun exposure.

### 3. Multi-Core Rayon Document Streaming
For high-volume multi-document streams, noyalib pre-scans boundary offsets in a lightweight pass and distributes document deserialization across all available CPU cores via Rayon.

### 4. JSON Schema 2020-12 & Validation
Built-in schema generation via `schemars` and validation via `jsonschema`. Infer schemas directly from Rust types or validate incoming data payloads on the fly.

## The noyalib Satellite Suite

| Satellite Crate | Environment | Primary Role |
| :--- | :--- | :--- |
| **`noyalib`** | Rust Library | Core parsing engine, SIMD scanning, Rayon streaming, Serde 0.9 compatibility shim. |
| **`noya-cli`** | Terminal CLI | Fast CLI tool for format conversion, linting, schema validation, and benchmarking. |
| **`noyalib-wasm`** | Web & Edge | WebAssembly package for browser runtimes, Node.js, and Cloudflare Workers. |
| **`noyalib-mcp`** | AI Agents | Model Context Protocol server exposing data validation tools to Claude, GPT-4, and AI agents. |
| **`noyalib-lsp`** | Code Editors | Language Server Protocol server powering VS Code autocompletion, schema hovers, and diagnostics. |

## Broader Rust Suite Integration

noyalib integrates seamlessly with the open-source Rust library suite by Sebastien Rousseau:

- **`dtt`** (DateTime): High-precision date parsing, formatting, and validation.
- **`kyberlib`** (Post-Quantum Cryptography): NIST-standardized CRYSTALS-Kyber encryption.
- **`hsh`** (Cryptographic Hashes): Fast, secure cryptographic hashing algorithms.
- **`rlg`** (Structured Logging): Zero-overhead JSON and terminal logger.
- **`vrd`** (Random Number Generation): CSPRNG pseudo-random generator.
- **`libmake`** (Crate Generator): Automated Rust library template engine.
