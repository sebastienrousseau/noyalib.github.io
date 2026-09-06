---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "noyalib — YAML 1.2 for Rust, WebAssembly and AI agents"
description: "A YAML 1.2 parser and serialiser for Rust with serde, zero unsafe code and a one-line serde_yaml replacement, plus a CLI, an editor, an agent and WebAssembly."
keywords: "noyalib, rust yaml, yaml parser rust, serde_yaml replacement, serde yaml archived, yaml 1.2 rust, yaml webassembly, yaml mcp server, yaml language server"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "index"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_home: "true"
eyebrow: "YAML 1.2 · Rust · zero unsafe code"
headline: "YAML that behaves the same everywhere you use it"
lead: "One parser behind a Rust library, a serde_yaml drop-in, a command line, an editor, an AI agent and the browser. It passes all 406 official test cases and has no unsafe code."
---

## Start with ten lines of Rust

Add the crate and read a document into a struct. Writing it back is one more call.

```toml
[dependencies]
noyalib = "0.0.34"
serde = { version = "1", features = ["derive"] }
```

```rust
use noyalib::{from_str, to_string};

#[derive(serde::Serialize, serde::Deserialize)]
struct Config {
    name: String,
    port: u16,
    features: Vec<String>,
}

fn main() -> Result<(), noyalib::Error> {
    let config: Config = from_str("name: api\nport: 8080\nfeatures: [auth]\n")?;
    println!("{}", to_string(&config)?);
    Ok(())
}
```

That is the data-binding API. It reads YAML into typed Rust values and writes
them back. It is what most YAML work needs, and it is the fast path.

## Two APIs over one parser

The second API is for tools. It reads YAML into a lossless tree that reproduces
the source byte for byte. You can change one value and every comment, blank
line and indentation choice stays where it was. That is what a version bumper,
a manifest patcher or an editor needs, and it is what the language server and
the MCP server are built on.

Both APIs share the same scanner and the same limits. A document the library
rejects is rejected the same way by the command line, the editor and the
browser build, because they are the same code.

## Why a new YAML library

The crate most Rust projects depend on, `serde_yaml`, was archived in March
2024. Its forks kept the API but not the test coverage. noyalib started from
the specification instead of from the fork, and measures itself against the
official YAML test suite on every change. The result is a parser that is
faster than every other pure-Rust YAML crate on every fixture measured, with
no unsafe code and a documented set of limits for untrusted input.

If you are on `serde_yaml` today, the [one-line migration](/migration/) keeps
your source unchanged. If you are starting fresh, the
[developer docs](/docs/) show the native API.
