---
# Front Matter (YAML) - Matching sebastienrousseau.github.io Standard Schema
author: "contact@sebastienrousseau.com (Sebastien Rousseau)"
banner_alt: "noyalib Suite Ecosystem Overview"
banner_height: "571"
banner_width: "1425"
banner: "https://noyalib.com/assets/images/og-image.svg"
changefreq: "weekly"
charset: "UTF-8"
cdn: "https://cloudcdn.pro/clients"
cname: "noyalib.com"
copyright: "© Copyright 2026 - Sebastien Rousseau. All rights reserved."
date: "2026-07-25"
description: "Detailed breakdown of all 5 satellite crates in the noyalib engine ecosystem: noyalib, noya-cli, noyalib-wasm, noyalib-mcp, and noyalib-lsp."
format-detection: "telephone=no"
hreflang: "en"
icon: "/assets/images/logo.svg"
id: "https://noyalib.com/suite/"
image_alt: "noyalib Logo"
image_height: "162"
image_width: "162"
image: "/assets/images/logo.svg"
keywords: "noyalib, suite, crates, rust, cli, wasm, mcp, lsp, serde, json schema"
last_reviewed: "2026-07-25"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "Logo for noyalib"
logo_height: "44"
logo_width: "44"
logo: "/assets/images/logo.svg"
menu: "active"
name: "noyalib Suite Ecosystem"
permalink: "https://noyalib.com/suite/"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Comprehensive overview of all 5 satellite crates comprising the noyalib enterprise data engine."
tags: "noyalib, suite, crates, rust, cli, wasm, mcp, lsp"
theme-color: "99, 102, 241"
title: "The noyalib Library Suite"
url: "https://noyalib.com/suite/"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

# RSS Parameters
atom_link: "https://noyalib.com/rss.xml"
category: "Documentation"
docs: "https://validator.w3.org/feed/docs/rss2.html"
generator: "Static Site Generator (SSG) (version 0.0.46)"
item_description: "Detailed breakdown of all 5 satellite crates in the noyalib engine ecosystem."
item_guid: "https://noyalib.com/suite/"
item_link: "https://noyalib.com/suite/"
item_pub_date: "Sat, 25 Jul 2026 00:00:00 +0000"
item_title: "The noyalib Library Suite"
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
apple-mobile-web-app-title: "noyalib Suite"
apple-touch-fullscreen: "yes"

# MS Application
msapplication-navbutton-color: "99, 102, 241"

# Twitter Card Parameters
twitter_card: "summary_large_image"
twitter_creator: "@wwdseb"
twitter_description: "Detailed breakdown of all 5 satellite crates in the noyalib engine ecosystem."
twitter_image: "https://noyalib.com/assets/images/og-image.png"
twitter_image_alt: "noyalib Suite Overview"
twitter_site: "@wwdseb"
twitter_title: "The noyalib Library Suite"
twitter_url: "https://noyalib.com/suite/"

# Humans.txt Metadata
author_website: "https://sebastienrousseau.com"
author_twitter: "@wwdseb"
author_location: "London, UK"
---

# The noyalib Library Suite

The noyalib suite consists of five synchronized satellite packages designed for specific runtime environments and use cases.

## Package Matrix Overview

| Crate | Primary Target | Main Capability | Key Feature |
| :--- | :--- | :--- | :--- |
| **`noyalib`** | Core Rust Libraries | Single/Parallel Deserialization | 520 MB/s SIMD + Rayon |
| **`noya-cli`** | Command Line / DevOps | Linting, Formatting, Schema | Zero-Dependency Binary |
| **`noyalib-wasm`** | Browser &amp; Edge Runtimes | JavaScript / WebAssembly API | In-Browser Vector Scanning |
| **`noyalib-mcp`** | AI Tools &amp; LLM Servers | Model Context Protocol Tool | Structured Data AI Interface |
| **`noyalib-lsp`** | IDE Runtimes | Language Server Protocol | Real-time Errors &amp; Schema Hovers |

---

## 1. `noyalib` (Core Engine)

The core crate provides zero-copy SIMD SWAR/SSE2 parsing, multi-document Rayon parallel streaming, and 100% memory safety.

```rust
use noyalib::{from_str, Value, Result};

fn main() -> Result<()> {
    let doc: Value = from_str("server: localhost\nport: 8085")?;
    assert_eq!(doc["port"], 8085);
    Ok(())
}
```

---

## 2. `noya-cli` (Terminal Binary)

Command-line tool for formatting, validating, and converting structured data streams.

```bash
noya-cli lint config.yaml
noya-cli convert input.yaml --to json --pretty
```

---

## 3. `noyalib-wasm` (WebAssembly Runtime)

NPM package compiled to WebAssembly via `wasm-bindgen` for Web applications and Cloudflare Workers.

```typescript
import { parseYaml } from 'noyalib-wasm';

const json = parseYaml("key: value");
```

---

## 4. `noyalib-mcp` (Model Context Protocol AI Server)

Native MCP server enabling AI agents (Claude, GPT-4, Antigravity) to query and validate data streams.

```bash
cargo install noyalib-mcp
noyalib-mcp --stdio
```

---

## 5. `noyalib-lsp` (Language Server Protocol)

IDE language server providing syntax diagnostics, schema hover cards, and autocomplete in VS Code and Neovim.

```json
{
  "yaml.schemas": {
    "https://json.schemastore.org/github-workflow": ".github/workflows/*.yml"
  }
}
```
