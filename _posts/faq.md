---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "noyalib FAQ"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 24, 2026"
description: "Frequently Asked Questions about noyalib features, Serde compatibility, SIMD speedups, and satellite libraries."
doc_url: "/getting-started/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Frequently Asked Questions about noyalib features, Serde compatibility, SIMD speedups, and satellite libraries."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/faq.html"
image_alt: "Logo of noyalib (NOYALIB)"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib faq, questions, serde compatibility, simd, safe rust"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib FAQ"
permalink: "https://noyalib.com/faq.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Frequently Asked Questions"
tags: "faq, noyalib, rust, questions"
theme_color: "rgb(99, 102, 241)"
title: "noyalib FAQ: Frequently Asked Questions"
url: "https://noyalib.com/faq.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

---

# Frequently Asked Questions (FAQ)

### What makes noyalib faster than legacy parsers?
noyalib uses SWAR/SIMD vectorization for scanning delimiters in a single CPU cycle, coupled with Rayon multi-core streaming for multi-document parsing.

### Is noyalib compatible with serde_yaml 0.9?
Yes! Enable the `compat-serde-yaml` feature for a drop-in shim with zero migration friction.

### Can noyalib run in WebAssembly / Browser environments?
Yes! The `noyalib-wasm` package provides WebAssembly bindings optimized for browser runtimes, Node.js, and Cloudflare Workers.

### What is noyalib-mcp?
`noyalib-mcp` is a Model Context Protocol (MCP) server that connects LLM tools (Claude, GPT-4, Antigravity) to noyalib's parsing and schema validation engine.
