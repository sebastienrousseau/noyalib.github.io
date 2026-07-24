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
keywords: "noyalib, rust, yaml parser, simd, rayon, zero copy, webassembly, mcp, lsp, serde, json schema, skeletonic css, sebastien rousseau, enterprise data engine"
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
tags: "noyalib, rust, yaml, simd, rayon, safe-rust, mcp, lsp, webassembly, skeletonic, enterprise"
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

**noyalib** is an open-source, enterprise-ready data parsing engine designed for production applications where execution speed, memory safety, and cross-platform flexibility are paramount.

---

## Why Leading Engineering Teams Choose noyalib

### 1. Ultra-Fast Zero-Copy SIMD Dispatch
By leveraging multi-byte SWAR (Simd Within A Register) and SSE2/NEON vectorization primitives, noyalib scans structural YAML delimiters in single CPU passes. Large payloads are processed at **520 MB/s**, delivering a **7.6x speedup** over legacy `serde_yaml` parsers.

### 2. Guaranteed Memory Safety (`#![forbid(unsafe_code)]`)
Security-critical environments cannot afford memory corruption or buffer overrun vulnerabilities. noyalib strictly enforces `#![forbid(unsafe_code)]` across its entire codebase while outperforming unsafe C-based parser wrappers.

### 3. Multi-Core Parallel Document Streaming
Large multi-document streams are pre-scanned at boundary markers and deserialized concurrently across CPU threads via Rayon, scaling linearly with available hardware cores.

### 4. Native Model Context Protocol (MCP) AI Integration
`noyalib-mcp` exposes standardized JSON-RPC 2.0 tools to AI agents (Claude, GPT-4, Antigravity), empowering LLMs to validate, query, and generate structured YAML data safely.

### 5. IDE Language Server (LSP) with Fault Recovery
`noyalib-lsp` introduces `parse_lenient` error-recovering parsing. Code editors (VS Code, Neovim) gain real-time syntax checking, schema autocompletion, and hover diagnostics without crashing on draft code.

---

## Enterprise Solutions & Use Cases

- **AI & LLM Data Pipelines**: Validate and format AI-generated structured data with zero risk of malformed outputs.
- **Financial & Payment Infrastructure**: Process high-volume transaction payloads with strict schema validation and 100% safe memory guarantees.
- **Edge Computing & Serverless**: Run `noyalib-wasm` inside WebAssembly runtimes (Cloudflare Workers, V8, Node.js) with zero native dependencies.
- **Cloud-Native Kubernetes Tooling**: Parse, lint, and validate multi-megabyte Kubernetes manifests rapidly via `noya-cli`.

---

## The Complete Satellite Ecosystem

```text
                               ┌───────────────────────────┐
                               │     noyalib Core Crate    │
                               │  (SIMD + Safe Rust Engine) │
                               └─────────────┬─────────────┘
                                             │
      ┌──────────────────┬───────────────────┼───────────────────┬──────────────────┐
      │                  │                   │                   │                  │
┌─────▼──────┐    ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐    ┌──────▼──────┐
│  noya-cli  │    │noyalib-wasm │     │ noyalib-mcp │     │ noyalib-lsp │    │Serde Compat │
│(CLI Tool)  │    │(WebAssembly)│     │(AI Server)  │     │(VS Code IDE)│    │(0.9 Shim)   │
└────────────┘    └─────────────┘     └─────────────┘     └─────────────┘    └─────────────┘
```

---

## Developer Ecosystem & Sister Libraries

noyalib forms part of a cohesive open-source Rust library suite engineered by Sebastien Rousseau:

- **`dtt`** (DateTime): Production date, time, parsing, and formatting library for Rust.
- **`kyberlib`** (Post-Quantum Cryptography): NIST-standardized CRYSTALS-Kyber post-quantum encryption.
- **`hsh`** (Cryptographic Hashes): High-speed cryptographic and non-cryptographic hashing primitives.
- **`rlg`** (Structured Logging): Zero-overhead structured logging framework.
- **`vrd`** (Random Generator): Cryptographically secure pseudo-random number generator.
- **`libmake`** (Crate Generator): Automated Rust crate template generator.

---

## Quick Start Matrix

| Target | Command / Package | Guide Link |
| :--- | :--- | :--- |
| **Rust Library** | `cargo add noyalib --features simd,rayon` | [Getting Started](/getting-started/index.html) |
| **Terminal CLI** | `cargo install noya-cli` | [CLI Guide](/suite/index.html) |
| **WebAssembly** | `npm install noyalib-wasm` | [WASM Setup](/suite/index.html) |
| **MCP AI Server** | `cargo install noyalib-mcp` | [MCP Integration](/suite/index.html) |
| **Language Server** | `cargo install noyalib-lsp` | [LSP Extension](/suite/index.html) |
