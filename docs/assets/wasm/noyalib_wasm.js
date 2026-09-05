// Browser loader for the published @sebastienrousseau/noyalib-wasm package
// (bundler target). The two files beside this one are copied verbatim from
// the npm tarball; this module does what wasm-pack's `web` target does:
// fetch the .wasm, instantiate it with the bindings module as its import,
// hand the exports to the bindings, and re-export the API.
import * as bg from "./noyalib_wasm_bg.js";
export * from "./noyalib_wasm_bg.js";

let ready;
export default function init(url = new URL("./noyalib_wasm_bg.wasm", import.meta.url)) {
  ready ??= (async () => {
    const imports = { "./noyalib_wasm_bg.js": bg };
    let instance;
    try {
      ({ instance } = await WebAssembly.instantiateStreaming(fetch(url), imports));
    } catch {
      const bytes = await (await fetch(url)).arrayBuffer();
      ({ instance } = await WebAssembly.instantiate(bytes, imports));
    }
    bg.__wbg_set_wasm(instance.exports);
    if (typeof instance.exports.__wbindgen_start === "function") instance.exports.__wbindgen_start();
    return bg;
  })();
  return ready;
}
