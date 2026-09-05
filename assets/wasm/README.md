# Vendored noyalib-wasm engine

The demo on the front page runs this bundle in the visitor's browser.

- `noyalib_wasm_bg.js`, `noyalib_wasm_bg.wasm`: the wasm-pack `bundler`
  output of noyalib-wasm at commit `9117c3b` (v0.0.33 plus the fix that
  keeps null values as JS `null`). Replace both files with the ones from
  the `@sebastienrousseau/noyalib-wasm` npm tarball at the next lockstep
  release.
- `noyalib_wasm.js`: a loader doing what wasm-pack's `web` target does,
  so the bundler files can be used from a static page without a bundler.
