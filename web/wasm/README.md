# Vendored noyalib-wasm engine

The playground at /playground/ runs this bundle in the visitor's browser; `make web` copies it to /wasm/.

- `noyalib_wasm_bg.js`, `noyalib_wasm_bg.wasm`: the wasm-pack `bundler`
  output of `@sebastienrousseau/noyalib-wasm` 0.0.34 from npm. Replace both
  files with the ones from the tarball at the next lockstep release.
- `noyalib_wasm.js`: a loader doing what wasm-pack's `web` target does,
  so the bundler files can be used from a static page without a bundler.
