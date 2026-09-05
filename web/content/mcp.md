---
name: "noyalib"
short_name: "noyalib"
theme_color: "#ffffff"
title: "MCP server — let an AI agent edit YAML safely"
description: "noyalib-mcp gives an assistant three tools to read and change YAML without losing a comment. Install with npx, configure Claude, Zed or Continue in one block."
keywords: "yaml mcp server, model context protocol yaml, noyalib-mcp, ai agent edit yaml, claude yaml tool"
author: "Sebastien Rousseau"
date: "2026-09-05"
news_publication_date: "2026-09-05"
layout: "page"
language: "en-GB"
schema: "page"
changefreq: "weekly"
copyright_year: "2026"
nav_mcp: "true"
eyebrow: "AI agents"
headline: "YAML edits by an assistant, without collateral damage"
lead: "An agent that edits a manifest with string replacement will eventually break it. This one edits through the lossless tree."
---

## What it does

`noyalib-mcp` is a Model Context Protocol server. It speaks JSON-RPC over
standard input and output, which is what Claude Desktop, Zed, Continue and
most other clients expect. It exposes three tools:

- **noyalib_get** reads the value at a dotted path, exactly as written.
- **noyalib_set** replaces the value at a path and writes the file back.
- **noyalib_set_multidoc** does the same for one document in a stream.

Every write goes through the lossless editor. The changed span is rewritten
and nothing else moves: comments, blank lines, quoting style and indentation
stay as they were. An invalid result is refused before the file is touched.

## Install

```bash
npx @sebastienrousseau/noyalib-mcp
```

The wrapper downloads the signed binary for your platform and caches it. If
you have a Rust toolchain, `cargo install noyalib-mcp` builds it instead, and
`ghcr.io/sebastienrousseau/noyalib-mcp` runs it in a container.

## Configure a client

Claude Desktop, in `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "noyalib": { "command": "noyalib-mcp" }
  }
}
```

Zed, in `settings.json`:

```json
{
  "context_servers": {
    "noyalib": { "command": { "path": "noyalib-mcp" } }
  }
}
```

Continue, in `config.json`:

```json
{
  "experimental": {
    "modelContextProtocolServers": [
      { "transport": { "type": "stdio", "command": "noyalib-mcp" } }
    ]
  }
}
```

Any other client that starts a stdio server works the same way. The
[manual](https://sebastienrousseau.github.io/noyalib-mcp/manual/) lists the
tool schemas, the resources and the error codes.

## What it does not do

It does not run a network service, so there is nothing to expose or
authenticate. It does not read files the client did not name. It does not
reformat a file as a side effect of an edit. And it does not accept a change
that would leave the file invalid.

## Discovery

This site publishes an MCP manifest at `/mcp.json` and an agents file at
`/agents.txt`, so an assistant that reads the site can find the server on
its own.
