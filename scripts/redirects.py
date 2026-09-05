#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Keep the previous site's addresses working.

The rebuild renamed five pages. Links to the old addresses exist in search
results, in READMEs and in other people's notes, and GitHub Pages has no
server-side redirect. Each old address gets a small page that sends the
visitor on: a meta refresh for browsers, a canonical link and noindex for
crawlers, and an ordinary link for anything that follows neither.

They are written after the sitemap is generated and marked noindex, so the
sitemap check excludes them and nothing lists them as pages.

    python3 scripts/redirects.py web/public
"""
from __future__ import annotations

import sys
from pathlib import Path

REDIRECTS = {
    "getting-started": "docs",
    "suite": "ecosystem",
    "rust-ecosystem": "ecosystem",
    "benchmarks": "conformance",
    "use-cases": "solutions",
    "tags": "ecosystem",
}

PAGE = """<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0; url=/{target}/" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="https://noyalib.com/{target}/" />
    <title>/{old}/ has moved to /{target}/ - noyalib</title>
    <meta name="description" content="The page at noyalib.com/{old}/ has moved. You are being sent to noyalib.com/{target}/, where it now lives." />
    <meta property="og:image" content="https://noyalib.com/images/social-card.png" />
    <meta name="twitter:image" content="https://noyalib.com/images/social-card.png" />
  </head>
  <body>
    <main id="main">
      <h1>This page has moved</h1>
      <p>It now lives at <a href="/{target}/">noyalib.com/{target}/</a>.</p>
    </main>
  </body>
</html>
"""


def main() -> int:
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "web/public")
    for old, target in REDIRECTS.items():
        if not (out / target / "index.html").exists():
            print(f"redirects: target /{target}/ was not built", file=sys.stderr)
            return 1
        page = out / old / "index.html"
        if page.exists():
            print(f"redirects: /{old}/ is a real page now; drop it from the map", file=sys.stderr)
            return 1
        page.parent.mkdir(parents=True, exist_ok=True)
        page.write_text(PAGE.format(old=old, target=target), encoding="utf-8")
    print(f"redirects: {len(REDIRECTS)} old address(es) forwarded")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
