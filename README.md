<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

# noyalib.com

The website for [noyalib](https://github.com/sebastienrousseau/noyalib), the
YAML 1.2 library for Rust, and its five companion crates. Built with
[ssg](https://crates.io/crates/ssg), published to GitHub Pages at
<https://noyalib.com>.

## Build

```bash
cargo install ssg --version 0.0.56 --locked
make web            # web/public
make serve          # http://127.0.0.1:8899
```

`make web` runs ssg over `web/content` with the `web/_layouts` theme, then
finishes the site: minified stylesheets, the vendored WebAssembly bundle for
the playground, inlined theme bootstrap allowed by hash, FAQ and article
structured data, the sitemap, the news sitemap, the agent manifests at the
root, the 404 page and the release stamp from `VERSION`.

## Gates

Every check the deploy runs, against the build:

```bash
npm install --no-save puppeteer-core axe-core   # for the browser checks
make gates
```

| Gate | What it refuses |
|---|---|
| `readability` | A page outside Flesch ease 55 to 75 or grade 5 to 9 |
| `seo` | A title over 60 or under 15 characters, a description over 160 or under 70, a missing canonical, a missing image alt, a duplicate title |
| `sitemap-check` | A built page missing from the sitemap, or a noindex page listed in it |
| `links` | Any internal reference that does not resolve in the build |
| `a11y-axe` | Any WCAG 2.2 AA failure axe-core finds in a real browser, in every theme combination |
| `reflow` | Horizontal overflow at phone widths |
| `focus-order` | A tab order that disagrees with what is painted |
| `terminal-swap` | Layout shift when a shell block becomes a terminal |
| `web-console` | Any browser console error or warning |
| ssg accessibility report | Any issue the generator's own WCAG pass reports |

The browser checks skip when Chrome or puppeteer is absent; CI sets
`NOYALIB_REQUIRE_BROWSER` so they fail there instead.

## Layout

```
web/ssg.toml          site configuration
web/content/          one Markdown file per page; news/ for release notes
web/_layouts/         theme: base, header, footer, index, page, playground, 404
                      styles.css (design system) + brand.css (noyalib tokens)
web/wasm/             the published noyalib-wasm bundle the playground runs
web/tests/            browser checks (puppeteer + axe-core)
scripts/              build finishing steps and the text gates
VERSION               the noyalib release the site names
```

## Releasing

When the crates release, bump `VERSION`, re-vendor `web/wasm/` from the
matching npm package (see `web/wasm/README.md`), add a release note under
`web/content/news/`, and merge. The deploy runs every gate before publishing.

## Licence

Apache-2.0 or MIT, at your option. The design system in `styles.css` is
shared with the maintainer's other sites under the same terms.
