---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "noyalib Suite of Libraries"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 24, 2026"
description: "Explore the full suite of satellite libraries in the noyalib ecosystem: noyalib, noya-cli, noyalib-wasm, noyalib-mcp, and noyalib-lsp."
doc_url: "/getting-started/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Explore the full suite of satellite libraries in the noyalib ecosystem: noyalib, noya-cli, noyalib-wasm, noyalib-mcp, and noyalib-lsp."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/suite.html"
image_alt: "Logo of noyalib (NOYALIB)"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib suite, noya-cli, noyalib-wasm, noyalib-mcp, noyalib-lsp, rust, crates"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib Suite of Libraries"
permalink: "https://noyalib.com/suite.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "The Complete Satellite Ecosystem for noyalib"
tags: "suite, noyalib, ecosystem, satellites, rust"
theme_color: "rgb(99, 102, 241)"
title: "noyalib Suite of Satellite Libraries: Rust, CLI, WASM, MCP & LSP"
url: "https://noyalib.com/suite.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

---

# noyalib Suite of Satellite Libraries

The **noyalib** ecosystem is designed as a set of synchronized satellite tools that deliver identical data parsing, validation, and serialization behaviors across every developer environment.

## 1. `noyalib` (Core Crate)
The core Rust library for data deserialization and serialization.
- **Features**: SIMD SWAR acceleration, Rayon parallel multi-document streaming, Serde 0.9 compatibility shim, JSON Schema 2020-12 validation.
- **Installation**: `cargo add noyalib --features simd,rayon`

## 2. `noya-cli` (Command Line Utility)
High-performance terminal binary for data transformation.
- **Features**: Querying, formatting, schema validation, streaming JSON/YAML conversion, and diagnostic benchmarking.
- **Installation**: `cargo install noya-cli`

## 3. `noyalib-wasm` (WebAssembly Runtime)
WebAssembly package optimized for browser and edge environments.
- **Features**: Post-processed with `wasm-opt`, direct JS object conversion, zero native toolchain dependencies.
- **Installation**: `npm install noyalib-wasm`

## 4. `noyalib-mcp` (Model Context Protocol AI Server)
Native MCP server for AI models and LLM agent integration.
- **Features**: Exposes `parse_yaml`, `validate_schema`, and `generate_schema` tools for Claude, GPT-4, and Antigravity agents.
- **Installation**: `cargo install noyalib-mcp`

## 5. `noyalib-lsp` (Language Server Protocol)
LSP server for code editors (VS Code, Neovim, Emacs, Zed).
- **Features**: Real-time syntax diagnostics, schema hovers, autocompletion, and fault-tolerant `parse_lenient` error recovery.
- **Installation**: `cargo install noyalib-lsp`
