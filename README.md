# noyalib.github.io

Official digital portal for **noyalib**, an enterprise-grade data and YAML engine written in 100% safe Rust featuring zero-copy SIMD parsing, parallel Rayon streaming, WebAssembly runtime, Model Context Protocol (MCP) AI server, and LSP support.

Built with **Static Site Generator SSG** (`ssg` v0.0.46) and **Skeletonic CSS Framework** (v2.0.0).

## Features

- **Content-First SSG Architecture**: Markdown source files in `_posts/` with full YAML frontmatter metadata compiled via Tera templates in `_layouts/`.
- **Skeletonic CSS & OKLCH Theme Engine**: 100% WCAG 2.1 AAA color contrast compliance in both dark and light modes.
- **macOS Safari Browser Code Showcase**: Interactive hero code preview window with authentic top tabs and dynamic address bar updates.
- **Interactive Playground Simulator**: Client-side YAML-to-JSON parser and schema validator running live in the browser.
- **100% WCAG AAA Accessibility**: Keyboard navigation, screen-reader skip links, and ARIA landmarks.
- **Automated GitHub Actions Deployment**: Continuous deployment targeting custom domain [`noyalib.com`](https://noyalib.com).

## Local Development & Build

Ensure `ssg` is installed:

```bash
cargo install ssg
```

Build the static site:

```bash
./build.sh
```

Or using Makefile:

```bash
make serve
```

## License

Licensed under Apache-2.0 & MIT.
