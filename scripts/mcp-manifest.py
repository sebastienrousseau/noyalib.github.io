#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Make the MCP manifest describe the server that actually exists.

The generator emits /.well-known/mcp.json naming itself, with an HTTP
transport at a URL nothing serves. noyalib ships a real MCP server, over
stdio, installable with one npx command, with three tools. An assistant that
reads the manifest should be told that, not sent to a 404.

    python3 scripts/mcp-manifest.py web/public 0.0.33
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

TOOLS = [
    {
        "name": "noyalib_get",
        "description": "Read the YAML value at a dotted or indexed path in a file, exactly as written.",
    },
    {
        "name": "noyalib_set",
        "description": "Replace the value at a path and write the file back, leaving every other byte as it was.",
    },
    {
        "name": "noyalib_set_multidoc",
        "description": "Replace a value in one document of a multi-document YAML stream.",
    },
    {
        "name": "noyalib_parse",
        "description": "Parse YAML text given in the request into its JSON data model. Stateless.",
    },
    {
        "name": "noyalib_edit",
        "description": "Set one value in YAML text given in the request, losslessly, and return the whole text. Stateless.",
    },
    {
        "name": "noyalib_validate",
        "description": "Parse-check YAML text, or validate it against a JSON Schema given in the request. Stateless.",
    },
]


def main() -> int:
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "web/public")
    version = sys.argv[2] if len(sys.argv) > 2 else "0.0.0"
    manifest = {
        "protocolVersion": "2025-06-18",
        "serverInfo": {"name": "noyalib-mcp", "version": version},
        "transport": {
            "type": "stdio",
            "command": "npx",
            "args": ["@sebastienrousseau/noyalib-mcp"],
        },
        "install": {
            "npm": "npx @sebastienrousseau/noyalib-mcp",
            "cargo": "cargo install noyalib-mcp --locked",
            "container": "docker run --rm -i ghcr.io/sebastienrousseau/noyalib-mcp:latest",
        },
        "capabilities": {"tools": {"listChanged": False}, "resources": {"listChanged": False}, "prompts": {"listChanged": False}},
        "tools": TOOLS,
        "documentation": "https://noyalib.com/mcp/",
        "source": "https://github.com/sebastienrousseau/noyalib-mcp",
    }
    text = json.dumps(manifest, indent=2) + "\n"
    written = []
    for rel in (".well-known/mcp.json", "mcp.json"):
        path = out / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        written.append(rel)
    print(f"mcp manifest: noyalib-mcp {version}, {len(TOOLS)} tool(s) -> {', '.join(written)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
