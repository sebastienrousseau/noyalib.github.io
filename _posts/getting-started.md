---
# Front Matter (YAML) - Matching sebastienrousseau.github.io Standard Schema
author: "contact@sebastienrousseau.com (Sebastien Rousseau)"
banner_alt: "noyalib Getting Started Guide"
banner_height: "571"
banner_width: "1425"
banner: "https://noyalib.com/assets/images/og-image.svg"
changefreq: "weekly"
charset: "UTF-8"
cdn: "https://cloudcdn.pro/clients"
cname: "noyalib.com"
copyright: "© Copyright 2026 - Sebastien Rousseau. All rights reserved."
date: "2026-07-25"
description: "Comprehensive quick start guide for noyalib, noya-cli, noyalib-wasm, noyalib-mcp, and noyalib-lsp."
format-detection: "telephone=no"
hreflang: "en"
icon: "/assets/images/logo.svg"
id: "https://noyalib.com/getting-started/"
image_alt: "noyalib Logo"
image_height: "162"
image_width: "162"
image: "/assets/images/logo.svg"
keywords: "noyalib, getting started, installation, rust, cargo, wasm, mcp, lsp, cli"
last_reviewed: "2026-07-25"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "Logo for noyalib"
logo_height: "44"
logo_width: "44"
logo: "/assets/images/logo.svg"
menu: "active"
name: "noyalib Getting Started"
permalink: "https://noyalib.com/getting-started/"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Quick start guide and installation matrix for noyalib across all execution environments."
tags: "noyalib, getting started, installation, rust, cargo, wasm, mcp, lsp"
theme-color: "99, 102, 241"
title: "Getting Started with noyalib"
url: "https://noyalib.com/getting-started/"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

# RSS Parameters
atom_link: "https://noyalib.com/rss.xml"
category: "Documentation"
docs: "https://validator.w3.org/feed/docs/rss2.html"
generator: "Static Site Generator (SSG) (version 0.0.46)"
item_description: "Comprehensive quick start guide for noyalib, noya-cli, noyalib-wasm, noyalib-mcp, and noyalib-lsp."
item_guid: "https://noyalib.com/getting-started/"
item_link: "https://noyalib.com/getting-started/"
item_pub_date: "Sat, 25 Jul 2026 00:00:00 +0000"
item_title: "Getting Started with noyalib"
last_build_date: "Sat, 25 Jul 2026 00:00:00 +0000"
managing_editor: "contact@sebastienrousseau.com (Sebastien Rousseau)"
pub_date: "Sat, 25 Jul 2026 00:00:00 +0000"
ttl: "60"
type: "article"
webmaster: "contact@sebastienrousseau.com"

# Apple Meta Tags
apple_mobile_web_app_orientations: "portrait"
apple_touch_icon_sizes: "192x192"
apple-mobile-web-app-capable: "yes"
apple-mobile-web-app-status-bar-inset: "black"
apple-mobile-web-app-status-bar-style: "black-translucent"
apple-mobile-web-app-title: "Getting Started"
apple-touch-fullscreen: "yes"

# MS Application
msapplication-navbutton-color: "99, 102, 241"

# Twitter Card Parameters
twitter_card: "summary_large_image"
twitter_creator: "@wwdseb"
twitter_description: "Comprehensive quick start guide for noyalib, noya-cli, noyalib-wasm, noyalib-mcp, and noyalib-lsp."
twitter_image: "https://noyalib.com/assets/images/og-image.png"
twitter_image_alt: "noyalib Getting Started"
twitter_site: "@wwdseb"
twitter_title: "Getting Started with noyalib"
twitter_url: "https://noyalib.com/getting-started/"

# Humans.txt Metadata
author_website: "https://sebastienrousseau.com"
author_twitter: "@wwdseb"
author_location: "London, UK"
---

# Getting Started with noyalib

Welcome to the official noyalib getting started guide. This document provides step-by-step instructions for integrating noyalib into your projects across Rust, terminal command line, WebAssembly runtimes, AI systems (MCP), and IDEs (LSP).

## Installation Matrix

| Target Platform | Package Name | Installation Command | Core Feature |
| :--- | :--- | :--- | :--- |
| **Rust Library** | `noyalib` | `cargo add noyalib --features simd,rayon` | SIMD + Rayon Data Engine |
| **Terminal CLI** | `noya-cli` | `cargo install noya-cli` | Formatting, Linting &amp; Conversion |
| **WebAssembly** | `noyalib-wasm` | `npm install noyalib-wasm` | In-Browser SIMD Parser |
| **Model Context Protocol** | `noyalib-mcp` | `cargo install noyalib-mcp` | AI Tool &amp; LLM Integration |
| **Language Server Protocol** | `noyalib-lsp` | `cargo install noyalib-lsp` | VS Code &amp; Neovim IDE Server |

## 1. Rust Integration

Add `noyalib` to your `Cargo.toml`:

```toml
[dependencies]
noyalib = { version = "0.0.16", features = ["simd", "rayon"] }
```

### Basic Single-Document Parsing

```rust
use noyalib::{from_str, Value, Result};

fn main() -> Result<()> {
    let yaml = "name: noyalib\nversion: 0.0.16\nsafe: true";
    let data: Value = from_str(yaml)?;
    println!("Package: {}", data["name"]);
    Ok(())
}
```

### Multi-Document Parallel Parsing with Rayon

```rust
use noyalib::{parallel, Value, Result};

fn main() -> Result<()> {
    let docs_stream = "--- doc: 1 --- doc: 2 --- doc: 3";
    let docs: Vec<Value> = parallel::from_str_many(docs_stream)?;
    assert_eq!(docs.len(), 3);
    Ok(())
}
```

## 2. Terminal CLI (`noya-cli`)

Install the binary executable:

```bash
cargo install noya-cli
```

Format and validate YAML files:

```bash
noya-cli fmt config.yaml --check
noya-cli convert config.yaml --to json
```

## 3. WebAssembly (`noyalib-wasm`)

Install the NPM package:

```bash
npm install noyalib-wasm
```

Use in JavaScript / TypeScript:

```javascript
import { parseYaml, validateSchema } from 'noyalib-wasm';

const yamlText = "name: noyalib\nspeed: 520MB/s";
const jsonObject = parseYaml(yamlText);
console.log(jsonObject);
```

## Next Steps

- Explore the [noyalib Suite](/suite/) documentation.
- Review [Performance Benchmarks](/benchmarks/).
- Read the [Migration Guide](/migration/) from `serde_yaml`.
