#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Give llms.txt the page list the generator leaves out.

The generator writes a title and a description and stops. The llms.txt
convention expects a list of the pages worth reading, each with one line
saying what it is, so an assistant can pick the right one instead of crawling.
The list is read from the built pages, so it cannot disagree with them.

    python3 scripts/llms.py web/public
"""
from __future__ import annotations

import html
import re
import sys
from pathlib import Path

BASE = "https://noyalib.com"


def main() -> int:
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "web/public")
    target = out / "llms.txt"
    if not target.exists():
        print("llms: the generator wrote no llms.txt", file=sys.stderr)
        return 1
    pages = []
    for page in sorted(out.rglob("index.html")):
        rel = page.relative_to(out).parent.as_posix()
        text = page.read_text(encoding="utf-8", errors="replace")
        if "noindex" in text[: text.find("</head>")]:
            continue
        title = re.search(r"<title>(.*?)</title>", text, re.S)
        desc = re.search(r'<meta name="description" content="(.*?)"', text, re.S)
        if not title or not desc:
            continue
        url = BASE + "/" + ("" if rel == "." else rel + "/")
        pages.append((url, html.unescape(title.group(1)).strip(), html.unescape(desc.group(1)).strip()))
    head = target.read_text(encoding="utf-8").rstrip("\n")
    lines = [head, "", "## Pages", ""]
    lines += [f"- [{t}]({u}): {d}" for u, t, d in pages]
    lines += ["", "## Machine-readable", "",
              f"- [MCP server manifest]({BASE}/mcp.json): how to run noyalib-mcp over stdio",
              f"- [Sitemap]({BASE}/sitemap.xml)",
              f"- [RSS]({BASE}/rss.xml)"]
    target.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"llms.txt: {len(pages)} page(s) listed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
