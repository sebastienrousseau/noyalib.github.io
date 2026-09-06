# Vendored noyalib-wasm engine

The playground at /playground/ runs this bundle in the visitor's browser; `make web` copies it to /wasm/.

- `noyalib_wasm_bg.js`, `noyalib_wasm_bg.wasm`: the wasm-pack `bundler`
  output of noyalib-wasm at tag `v0.0.36`, built locally with wasm-pack 0.15.0
  (the npm 0.0.36 publish failed in its own package gate; 0.0.37 carries the
  repaired gate). Replace both files with the ones from the npm tarball at the
  next lockstep release.
- `noyalib_wasm.js`: a loader doing what wasm-pack's `web` target does,
  so the bundler files can be used from a static page without a bundler.
