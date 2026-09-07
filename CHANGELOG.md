# Changelog

All notable changes to noyalib.com.

## [Unreleased]

## [0.0.39] - 2026-09-07

### Changed

- Site version bumped to the v0.0.39 release; install snippets, the
  migration pin and the playground example follow; a release note for
  v0.0.39. The playground bundle is noyalib-wasm 0.0.39 from npm.

### Added

- **The site checks its own conformance claim.** `make suite` starts the
  same server the browser gates use, runs every case of the official
  yaml-test-suite through the WebAssembly bundle under `/wasm/` (the
  bytes a visitor's browser downloads), and fails if the result differs
  from the number on the conformance page: 382 of 382, with 24
  multi-document cases outside `parseJson`, which is single-document.
  The suite comes from the noyalib core at the tag `VERSION` names.
- **The playground bundle must be the published package.**
  `make wasm-provenance` fetches
  `@sebastienrousseau/noyalib-wasm` at this release's version, verifies
  the tarball against the hash the npm registry publishes, and fails
  unless the two vendored files are byte-identical to it. Two earlier
  releases vendored local builds while the npm package was broken;
  nothing on the site would have caught that.

## [0.0.38] - 2026-09-06

### Changed

- The conformance page and the home page name and link the official
  yaml-test-suite; the conformance page describes the stream property and
  the ultra-complex fixture. The playground gains a second example, that
  fixture's second document, which projects onto JSON exactly.
- Site version bumped to the v0.0.38 release; install snippets, the
  migration pin and the playground example follow; a release note for
  v0.0.38. The playground bundle is noyalib-wasm 0.0.38 from npm.

## [0.0.37] - 2026-09-06

### Changed

- Site version bumped to the v0.0.37 release; install snippets, the
  migration pin and the playground example follow; a release note for
  v0.0.37. The playground bundle is noyalib-wasm 0.0.37 from npm.

## [0.0.36] - 2026-09-06

### Changed

- Site version bumped to the v0.0.36 release; install snippets, the
  migration pin and the playground example follow; a release note for
  v0.0.36. The playground bundle is noyalib-wasm 0.0.36 from npm.

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
