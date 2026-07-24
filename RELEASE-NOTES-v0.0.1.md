# Release Notes: noyalib.github.io v0.0.1

We are pleased to announce the official release of noyalib.github.io v0.0.1, the official website for Noya (NOYA) and its synchronized ecosystem of satellite libraries.

## Overview

noyalib.github.io is built on the Shokunin Static Site Generator (SSG v0.0.46) and the Skeletonic CSS Framework (v2.0.0). The site serves as the central digital portal for the noyalib suite of libraries developed in Rust.

## Key Features and Improvements

### Shokunin SSG Architecture and Markdown Pipeline
- Content-first static compilation powered by Shokunin SSG (`ssg build`).
- Markdown source files located in `_posts/` with full YAML frontmatter metadata (author, description, keywords, layout, language, permalink, RSS parameters, OpenGraph params, and Apple meta tags).
- Tera layout templates in `_layouts/` for modular site generation (`index.html`, `page.html`).
- Automated compilation output targeting `docs/` for GitHub Pages hosting.

### Design System and Skeletonic CSS Integration
- Polars-inspired landing interface featuring high-contrast dark theme tokens and ambient visual glow effects.
- Integration of Skeletonic CSS v2.0.0 utilizing native CSS cascade layers (@layer skeletonic.base, skeletonic.layout, skeletonic.components, skeletonic.utilities, noyalib.theme, noyalib.components).
- Fully responsive layout supporting viewports from mobile (320px) to ultra-wide desktop (1920px+).

### Interactive Ecosystem Explorer
- Interactive tabbed interface covering all 5 core satellite products in the noyalib ecosystem:
  - noyalib: Core Rust data parsing library featuring zero-copy SIMD scanning and parallel Rayon document streaming.
  - noya-cli: Terminal command-line tool for linting, formatting, schema validation, and data conversion.
  - noyalib-wasm: WebAssembly bindings for client-side web browsers and edge runtimes (Node.js, Cloudflare Workers).
  - noyalib-mcp: Model Context Protocol (MCP) server integration for AI tools and LLM agent interactions.
  - noyalib-lsp: Language Server Protocol (LSP) server providing real-time diagnostics, schema hover docs, and lenient error recovery in VS Code and Neovim.

### Performance and Interactive Simulator
- Sub-10ms First Contentful Paint (FCP) with zero external JavaScript framework dependencies.
- Built-in client-side YAML-to-JSON parser and schema validator playground running directly within the browser runtime.
- Interactive code snippet tabs for Rust, CLI, WebAssembly, MCP, and LSP integration with single-click clipboard copying.

### Accessibility and Standards Compliance
- Full WCAG 2.1 AAA accessibility compliance.
- Keyboard-accessible ARIA tablist navigation supporting arrow keys (ArrowLeft, ArrowRight).
- Explicit focus rings (:focus-visible), screen-reader skip links (.skip-link), and automated pa11y configuration (.pa11yci).

### Search Engine Optimization (SEO) & Web Standards
- Embedded Schema.org JSON-LD metadata for SoftwareApplication and WebSite entities.
- Complete OpenGraph and Twitter card metadata with vector social card artwork (assets/images/og-image.svg).
- Automated XML sitemap (sitemap.xml), robots directive (robots.txt), CycloneDX SBOM (sbom.cdx.json), and LLM text feeds (llms.txt, llms-full.txt).

## Installation

To install the core library using Cargo:

```shell
cargo add noyalib --features simd,rayon
```

To install the command-line utility:

```shell
cargo install noya-cli
```

To install the WebAssembly package via NPM:

```shell
npm install noyalib-wasm
```

## Licensing

noyalib.github.io is licensed under the Apache License, Version 2.0 and the MIT License.
