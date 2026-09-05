#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Unwrap the highlighter's structural spans so axe can measure contrast.

The syntax highlighter wraps a struct body, a function signature or a block in
`<span class="meta ...">` and `<span class="source ...">` elements that run
across several lines. Nothing styles them: the stylesheet colours the pre and
leaves every token class alone. But a multi-line inline element has a bounding
box that overlaps its neighbours, and axe-core then reports that it "could not
rule" on the contrast of everything inside, which the accessibility gate treats
as a failure because an unmeasured element is not a passed one.

Removing the wrappers changes no pixel and makes every remaining span a
single-line token whose contrast can be measured.

    python3 scripts/flatten-highlight.py web/public
"""
from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path

WRAPPERS = ("meta", "source")


class Flatten(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.out: list[str] = []
        self.stack: list[bool] = []  # True when the span was dropped
        self.dropped = 0

    def handle_starttag(self, tag, attrs):
        if tag == "span":
            classes = (dict(attrs).get("class") or "").split()
            if classes and classes[0] in WRAPPERS:
                self.stack.append(True)
                self.dropped += 1
                return
            self.stack.append(False)
        self.out.append(self.get_starttag_text())

    def handle_startendtag(self, tag, attrs):
        self.out.append(self.get_starttag_text())

    def handle_endtag(self, tag):
        if tag == "span" and self.stack:
            if self.stack.pop():
                return
        self.out.append(f"</{tag}>")

    def handle_data(self, data):
        self.out.append(data)

    def handle_entityref(self, name):
        self.out.append(f"&{name};")

    def handle_charref(self, name):
        self.out.append(f"&#{name};")

    def handle_comment(self, data):
        self.out.append(f"<!--{data}-->")

    def handle_decl(self, decl):
        self.out.append(f"<!{decl}>")


BLOCK = re.compile(r"(<pre class=\"highlight[^\"]*\"[^>]*>)(.*?)(</pre>)", re.S)


def main() -> int:
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "web/public")
    pages = blocks = spans = 0
    for page in root.rglob("*.html"):
        html = page.read_text(encoding="utf-8")
        changed = False

        def repl(m: re.Match) -> str:
            nonlocal blocks, spans, changed
            f = Flatten()
            f.feed(m.group(2))
            f.close()
            if f.dropped:
                blocks += 1
                spans += f.dropped
                changed = True
                return m.group(1) + "".join(f.out) + m.group(3)
            return m.group(0)

        new = BLOCK.sub(repl, html)
        if changed:
            page.write_text(new, encoding="utf-8")
            pages += 1
    print(f"highlight: {spans} wrapper span(s) unwrapped in {blocks} block(s) across {pages} page(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
