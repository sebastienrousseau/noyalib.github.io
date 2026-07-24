---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "Getting Started with Noya (NOYA)"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 Noya (NOYA). All rights reserved."
date: "Jul 24, 2026"
description: "Step-by-step guide to installing and using noyalib in Rust, CLI, WebAssembly, MCP, and LSP environments."
doc_url: "/installation/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Step-by-step guide to installing and using noyalib in Rust, CLI, WebAssembly, MCP, and LSP environments."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/getting-started.html"
image_alt: "Logo of Noya (NOYA)"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib, getting started, rust, cli, wasm, mcp, lsp"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "Noya (NOYA)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "Getting Started with Noya"
permalink: "https://noyalib.com/getting-started.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Quick Start Guide for Noya Engine"
tags: "getting-started, noyalib, rust, setup"
theme_color: "rgb(99, 102, 241)"
title: "Getting Started with noyalib: Installation and Quick Start"
url: "https://noyalib.com/getting-started.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

---

# Getting Started with noyalib

Follow this guide to integrate noyalib into your project stack.

## 1. Rust Project Setup

Add `noyalib` to your `Cargo.toml`:

```shell
cargo add noyalib --features simd,rayon
```

Usage in code:

```rust
use noyalib::{parallel, Value};

fn main() -> noyalib::Result<()> {
    let doc: Value = parallel::from_str("key: value")?;
    println!("Value: {}", doc["key"]);
    Ok(())
}
```

## 2. Command Line Interface (CLI)

```shell
cargo install noya-cli
noya validate config.yaml --schema schema.json
```

## 3. WebAssembly (WASM)

```shell
npm install noyalib-wasm
```
