#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
# SPDX-License-Identifier: Apache-2.0 OR MIT
"""Put the site's own JavaScript back after ssg has minified it.

ssg 0.0.63 and later copy, minify and fingerprint every script under the
layout directory, and the minifier collapses whitespace inside string
literals: `"0px 0px -15% 0px"` leaves as `"0px 0px-15%0px"`, the playground's
YAML example loses its indentation, the terminal prompt loses its trailing
space. The names and `integrity` attributes it writes into the pages are
right; the bytes behind them are not.

So the pages keep their fingerprinted references, and this pass replaces the
bytes: main.js and theme-init.js as written (main.js is read by humans in
the browser's devtools and theme-init.js is inlined), terminal.js and
playground.js through the repository's own conservative minifier, which never
touches a string. Then the SHA-384 `integrity` on every reference is
recomputed from what is actually served. Remove this once ssg's minifier
preserves string literals.

    python3 scripts/restore-scripts.py web/public web/_layouts
"""
from __future__ import annotations

import base64
import hashlib
import importlib.util
import re
import sys
from pathlib import Path

RAW = ("main.js", "theme-init.js")
MINIFIED = ("terminal.js", "playground.js")


def site_minifier():
    spec = importlib.util.spec_from_file_location("minify_js", Path(__file__).with_name("minify-js.py"))
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module.scan


def integrity(data: bytes) -> str:
    return "sha384-" + base64.b64encode(hashlib.sha384(data).digest()).decode()


def main() -> int:
    if len(sys.argv) != 3:
        print("usage: restore-scripts.py <site-dir> <layouts-dir>", file=sys.stderr)
        return 2
    root, layouts = Path(sys.argv[1]), Path(sys.argv[2])
    scan = site_minifier()
    replaced: dict[str, str] = {}  # built file name -> new integrity
    for name in RAW + MINIFIED:
        source = layouts / name
        if not source.is_file():
            continue
        stem = name[:-3]
        built = sorted(root.glob(f"{stem}.[0-9a-f]*.js"))
        built = [b for b in built if re.fullmatch(rf"{re.escape(stem)}\.[0-9a-f]{{8}}\.js", b.name)]
        if len(built) != 1:
            print(f"restore-scripts: expected one fingerprinted {name}, found {[b.name for b in built]}", file=sys.stderr)
            return 1
        text = source.read_text(encoding="utf-8")
        data = (scan(text) if name in MINIFIED else text).encode("utf-8")
        built[0].write_bytes(data)
        replaced[built[0].name] = integrity(data)

    pages = 0
    for page in root.rglob("*.html"):
        html = page.read_text(encoding="utf-8")
        new = html
        for fname, sri in replaced.items():
            new = re.sub(
                rf'(<script src="[^"]*/{re.escape(fname)}" integrity=")[^"]*(")',
                lambda m, s=sri: m.group(1) + s + m.group(2),
                new,
            )
        if new != html:
            page.write_text(new, encoding="utf-8")
            pages += 1
    print(f"scripts: {len(replaced)} restored from source, integrity rewritten on {pages} page(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
