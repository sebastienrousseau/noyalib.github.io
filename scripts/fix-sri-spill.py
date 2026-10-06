#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Strip subresource-integrity attributes from places they cannot go.

ssg's fingerprint plugin rewrites every quoted asset path in a page to its
fingerprinted name and appends `integrity="…" crossorigin="anonymous"` to
it, by plain text replacement (ssg 0.0.63 to 0.0.66, `rewrite_asset_refs`
in src/plugins/assets.rs). That is right on `<script src>` and
`<link rel="stylesheet">`, and wrong everywhere else the same path occurs:
inside a JSON-LD block it turns the JSON invalid, on a `<meta content>` or
`<img src>` it is an attribute the element does not have.

This pass keeps the fingerprinted path (the file exists) and removes the
two attributes from JSON-LD bodies and from every element other than
`<script>` and `<link>`. Remove it once ssg scopes the rewrite itself.

    python3 scripts/fix-sri-spill.py web/public
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

SPILL = re.compile(r' integrity="[^"]*" crossorigin="anonymous"')
LD_BLOCK = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
# An opening tag that is neither <script …> nor <link …> but carries the spill.
OTHER_TAG = re.compile(r'<(?!script\b|link\b)[a-zA-Z][^<>]*?\sintegrity="[^"]*" crossorigin="anonymous"[^<>]*>')


def clean(html: str) -> tuple[str, int]:
    count = 0

    def in_ld(m: re.Match) -> str:
        nonlocal count
        body, n = SPILL.subn("", m.group(2))
        count += n
        return m.group(1) + body + m.group(3)

    html = LD_BLOCK.sub(in_ld, html)

    def in_tag(m: re.Match) -> str:
        nonlocal count
        tag, n = SPILL.subn("", m.group(0))
        count += n
        return tag

    html = OTHER_TAG.sub(in_tag, html)
    return html, count


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: fix-sri-spill.py <site-dir>", file=sys.stderr)
        return 2
    root = Path(sys.argv[1])
    pages = removed = 0
    for page in root.rglob("*.html"):
        html = page.read_text(encoding="utf-8")
        new, n = clean(html)
        if n:
            page.write_text(new, encoding="utf-8")
            pages += 1
            removed += n
    print(f"sri: {removed} misplaced integrity attribute(s) removed across {pages} page(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
