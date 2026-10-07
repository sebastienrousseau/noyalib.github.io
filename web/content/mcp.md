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
banner: "constellation-purple"
banner_alt: "A network of connected points, drawn in blue and violet."
eyebrow: "noyalib-mcp"
headline: "YAML edits by an assistant. Byte-faithful."
lead: "An agent that edits a manifest with string replacement will eventually break it. This one edits through the lossless tree, so it never can."
---

## What it does

`noyalib-mcp` is a Model Context Protocol server. By default it speaks
JSON-RPC over standard input and output, which is what Claude Desktop, Zed,
Continue and most other clients expect. It exposes six tools.

Three of them work on files:

- **noyalib_get** reads the value at a dotted path, exactly as written.
- **noyalib_set** replaces the value at a path and writes the file back.
- **noyalib_set_multidoc** does the same for one document in a stream.

Three take YAML in the request and touch nothing on disk:

- **noyalib_parse** returns the JSON data model of the text.
- **noyalib_edit** sets a value in the text and returns the new text.
- **noyalib_validate** checks the text parses and, given a JSON Schema,
  that it conforms.

The file tools only reach files under one directory, the server root: the
working directory, or the one you pass with `--root`. A path that resolves
outside it is refused before the file is opened, and a symbolic link that
points outside counts as outside.

`noyalib_parse` and `noyalib_validate` parse under the strict YAML 1.2
profile, the one built for untrusted input. A duplicate key is an error
rather than a silent overwrite, only `true` and `false` are booleans,
indentation must be even, and the tighter size and depth limits apply.
Start the server with `--profile standard` to use the library defaults.

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

It does not open a port unless you ask it to. The streamable HTTP and SSE
transports are opt-in with `--transport`, bind to `127.0.0.1` by default, and
do not authenticate: keep them on the loopback interface or behind a gateway
you trust. It does not read files the client did not name, and it does not
read or write anything outside its root. It does not
reformat a file as a side effect of an edit. And it does not accept a change
that would leave the file invalid.

## Discovery

This site publishes an MCP manifest at `/mcp.json` and an agents file at
`/agents.txt`, so an assistant that reads the site can find the server on
its own.
