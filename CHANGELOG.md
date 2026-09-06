# Changelog

All notable changes to noyalib.com.

## [Unreleased]

## [0.0.35] - 2026-09-06

### Changed

- Site version bumped to the v0.0.35 release; install snippets, the
  migration pin and the playground example follow; a release note for
  v0.0.35. The playground bundle is noyalib-wasm 0.0.35 from npm.

### Changed

- The brand from cloudcdn.pro: the rosette mark in the header and as the
  touch icon, the wordmark purple as the accent, the official social image.
- Photograph banners on every page (the askiso set, licensed to the
  maintainer) behind the scrim; the rosette as a signature in the hero.
- A product-led home page: statement band with three pillars, the six-
  product lineup, capability chapters with code proofs, use-case cards,
  a "Ready for 2027" evidence block and the one-line migration.
- Every masthead rewritten in a short declarative register; the family
  page carries a tech-specs table; the readability band widened to
  ease 55 to 85 for that register.
- The search trigger aligns with the content column on wide screens.

## [0.0.34] - 2026-09-05

### Changed

- Site version bumped to the v0.0.34 release; install snippets, the
  migration pin and the playground example follow. The playground bundle
  is the published noyalib-wasm 0.0.34 npm package.
- Release note for v0.0.34.

### Changed

- Rebuilt on the ssg configuration file and a curated theme: a base layout
  with a strict content security policy and structured data, a five-category
  navigation with one action, a six-column footer, a metrics band and a
  consistent masthead on every page.
- Seventeen pages written from the repositories' own documents: solutions,
  migration, playground, developer docs, ecosystem, MCP, conformance,
  security, FAQ, about, news, contact, legal and the 404.
- The playground runs the published noyalib-wasm bundle in the page, with
  YAML to JSON and back.
- No third-party requests: the Google Fonts and animation stylesheets are
  gone, the design uses the system font stack.
- Real quality gates on every push and deploy: readability, search metadata,
  sitemap, internal links, WCAG 2.2 AA with axe-core in every theme
  combination, reflow, focus order, terminal swap and the browser console.
- Agent discovery: agents.txt, mcp.json and ai-plugin.json at the root.
- RSS, Atom and JSON feeds, a news sitemap, and NewsArticle and FAQPage
  structured data read back from the built pages.

### Fixed

- The previous site's addresses (getting-started, suite, rust-ecosystem,
  benchmarks, use-cases, tags) forward to their new pages instead of 404.
- The old deploy workflow, which uploaded a directory that no longer
  exists, is removed; the Website workflow is the only deploy.

### Removed

- The tag pages that leaked other projects' tags, the hand-patched build
  script, the root index.html with noyalib.github.io canonicals, and the
  quality-gate workflow that installed tools it never ran.

## [0.0.33] - 2026-09-05

### Changed

- Site version bumped to the v0.0.33 release; the demo switched to the real
  engine through `parseJson`.
