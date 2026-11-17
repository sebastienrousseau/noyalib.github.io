/**
 * A YAML document with byte-faithful source preservation and path-targeted
 * edits.
 */
export class WasmDocument {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WasmDocumentFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmdocument_free(ptr, 0);
    }
    /**
     * Read the YAML comments associated with the node at `path`.
     * Returns `{ before: string[], inline: string | null }` so the
     * caller can surface human-authored doc-comments alongside
     * values — the demo that motivates the entire CST architecture.
     *
     * Bound on the JS side as `commentsAt(path)` per JS naming
     * conventions.
     * @param {string} path
     * @returns {any}
     */
    commentsAt(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_commentsAt(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * Get the raw source fragment at a dotted path.
     *
     * Bound on the JS side as `getSource(path)` per JS naming
     * conventions.
     * @param {string} path
     * @returns {any}
     */
    getSource(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_getSource(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Get the parsed value at a dotted path.
     * @param {string} path
     * @returns {any}
     */
    get(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_get(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * Parse a YAML string into a lossless Document.
     * @param {string} yaml
     */
    constructor(yaml) {
        const ptr0 = passStringToWasm0(yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0];
        WasmDocumentFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Replace the bytes at `start..end` with `replacement`.
     *
     * Bound on the JS side as `replaceSpan(start, end, replacement)`
     * per JS naming conventions.
     * @param {number} start
     * @param {number} end
     * @param {string} replacement
     */
    replaceSpan(start, end, replacement) {
        const val2 = +start;
        const val3 = +end;
        const ptr0 = passStringToWasm0(replacement, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_replaceSpan(this.__wbg_ptr, val2, val3, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Set a value at a dotted path using a JS object.
     *
     * Bound on the JS side as `setValue(path, value)` per JS naming
     * conventions.
     * @param {string} path
     * @param {any} value
     */
    setValue(path, value) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_setValue(this.__wbg_ptr, ptr0, len0, value);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Set a value at a dotted path using a YAML fragment string.
     * @param {string} path
     * @param {string} fragment
     */
    set(path, fragment) {
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(fragment, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        const ret = wasm.wasmdocument_set(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Get the byte range `{ start, end }` for the value at a dotted path.
     *
     * Bound on the JS side as `spanAt(path)` per JS naming
     * conventions.
     * @param {string} path
     * @returns {any}
     */
    spanAt(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.wasmdocument_spanAt(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * Re-emit the document as a string. Byte-identical to original if no
     * edits.
     *
     * Bound on the JS side as `toString()` (the conventional camelCase
     * name) so callers can write `doc.toString()` and override the
     * default `Object.prototype.toString` rather than coexist with it.
     * @returns {string}
     */
    toString() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.wasmdocument_toString(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) WasmDocument.prototype[Symbol.dispose] = WasmDocument.prototype.free;

/**
 * Get a value at a dotted path from a YAML string. Bound on the
 * JS side as `getPath(yaml, path)` per JS naming conventions.
 * @param {string} yaml
 * @param {string} path
 * @returns {any}
 */
export function getPath(yaml, path) {
    let ptr0, len0, ptr1, len1;
    try {
        ptr0 = passStringToWasm0(yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len0 = WASM_VECTOR_LEN;
        ptr1 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        len1 = WASM_VECTOR_LEN;
    } catch (e) {
        if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
        if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
        throw e;
    }
    const ret = wasm.getPath(ptr0, len0, ptr1, len1);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Merge two YAML documents.
 * @param {string} base_yaml
 * @param {string} override_yaml
 * @returns {string}
 */
export function merge(base_yaml, override_yaml) {
    let deferred4_0;
    let deferred4_1;
    try {
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passStringToWasm0(base_yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(override_yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        const ret = wasm.merge(ptr0, len0, ptr1, len1);
        var ptr3 = ret[0];
        var len3 = ret[1];
        if (ret[3]) {
            ptr3 = 0; len3 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred4_0 = ptr3;
        deferred4_1 = len3;
        return getStringFromWasm0(ptr3, len3);
    } finally {
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
 * Parse a YAML string and return a JS object.
 * @param {string} yaml
 * @returns {any}
 */
export function parse(yaml) {
    const ptr0 = passStringToWasm0(yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.parse(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Parse YAML with tags stripped recursively. [`parse`] keeps tags as
 * `{"!tag": value}` for callers that need them.
 *
 * This projection retains YAML NaN and infinity as JavaScript numbers;
 * use [`validate_json`] to require JSON-compatible values. Integer
 * conversion refuses values outside JavaScript's safe integer range.
 * @param {string} yaml
 * @returns {any}
 */
export function parseJson(yaml) {
    const ptr0 = passStringToWasm0(yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.parseJson(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * Serialize a JS object to a YAML string.
 * @param {any} value
 * @returns {string}
 */
export function stringify(value) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ret = wasm.stringify(value);
        var ptr1 = ret[0];
        var len1 = ret[1];
        if (ret[3]) {
            ptr1 = 0; len1 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred2_0 = ptr1;
        deferred2_1 = len1;
        return getStringFromWasm0(ptr1, len1);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
 * Validate YAML against the JSON-compatible schema. Bound on the
 * JS side as `validateJson(yaml)` per JS naming conventions.
 * @param {string} yaml
 * @returns {boolean}
 */
export function validateJson(yaml) {
    const ptr0 = passStringToWasm0(yaml, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.validateJson(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return ret[0] !== 0;
}
export function __wbg_Error_208446807d0d1e30(arg0, arg1) {
    const ret = Error(getStringFromWasm0(arg0, arg1));
    return ret;
}
export function __wbg_Number_ff192a72a0dcdf6d(arg0) {
    const ret = Number(arg0);
    return ret;
}
export function __wbg_String_8564e559799eccda(arg0, arg1) {
    const ret = String(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_bigint_get_as_i64_11da4b52cd0aedef(arg0, arg1) {
    const v = arg1;
    const ret = typeof(v) === 'bigint' ? v : undefined;
    getDataViewMemory0().setBigInt64((arg0 >>> 0) + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, !isLikeNone(ret), true);
}
export function __wbg___wbindgen_boolean_get_4f1baf9a00be3c74(arg0) {
    const v = arg0;
    const ret = typeof(v) === 'boolean' ? v : undefined;
    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
}
export function __wbg___wbindgen_debug_string_f249a2a76caa9a55(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_in_3f58a9d3b3a7eed2(arg0, arg1) {
    const ret = arg0 in arg1;
    return ret;
}
export function __wbg___wbindgen_is_bigint_5fa10641e039d3ef(arg0) {
    const ret = typeof(arg0) === 'bigint';
    return ret;
}
export function __wbg___wbindgen_is_function_741ff2bb612836f5(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_object_8b968c3ab8e96595(arg0) {
    const val = arg0;
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
}
export function __wbg___wbindgen_is_string_fc456fee5d3317de(arg0) {
    const ret = typeof(arg0) === 'string';
    return ret;
}
export function __wbg___wbindgen_jsval_eq_38d7bfbe4cc84039(arg0, arg1) {
    const ret = arg0 === arg1;
    return ret;
}
export function __wbg___wbindgen_jsval_loose_eq_b2f214e2e4b30e36(arg0, arg1) {
    const ret = arg0 == arg1;
    return ret;
}
export function __wbg___wbindgen_number_get_934b640d0889af78(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64((arg0 >>> 0) + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, !isLikeNone(ret), true);
}
export function __wbg___wbindgen_string_get_7ce8eee7fd327545(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
    getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_throw_4c88d8bf264fd984(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg_call_40b008ba32f73991() { return handleError(function (arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
}, arguments); }
export function __wbg_done_57e08d0be6e30c02(arg0) {
    const ret = arg0.done;
    return ret;
}
export function __wbg_entries_7bb1459bd9b5c2b9(arg0) {
    const ret = Object.entries(arg0);
    return ret;
}
export function __wbg_forEach_d33df67d27c9bd85(arg0, arg1, arg2) {
    try {
        var state0 = {a: arg1, b: arg2};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return wasm_bindgen_a49d381869565574___convert__closures_____invoke___js_sys_2039e88c239d32ce___Function_fn_wasm_bindgen_a49d381869565574___JsValue_____wasm_bindgen_a49d381869565574___sys__Undefined___js_sys_2039e88c239d32ce___Function_fn_wasm_bindgen_a49d381869565574___JsValue_____wasm_bindgen_a49d381869565574___sys__Undefined_______true_(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        arg0.forEach(cb0);
    } finally {
        state0.a = 0;
    }
}
export function __wbg_from_eac91875c8a5ffa4(arg0) {
    const ret = Array.from(arg0);
    return ret;
}
export function __wbg_get_635eea311fa1a291() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_get_d7176cfb76d71114(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_get_unchecked_e6325ad374eff861(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_instanceof_ArrayBuffer_12cdaa4161423e6b(arg0) {
    let result;
    try {
        result = arg0 instanceof ArrayBuffer;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Map_0b4fc8b62e73f163(arg0) {
    let result;
    try {
        result = arg0 instanceof Map;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Uint8Array_d7aeb0dcb3108fea(arg0) {
    let result;
    try {
        result = arg0 instanceof Uint8Array;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_isArray_bcf1376d0d732d08(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
}
export function __wbg_isSafeInteger_1a35ba4d31e71d38(arg0) {
    const ret = Number.isSafeInteger(arg0);
    return ret;
}
export function __wbg_is_2248ff2b575d60c7(arg0, arg1) {
    const ret = Object.is(arg0, arg1);
    return ret;
}
export function __wbg_iterator_e4c5e8f68ada7b58() {
    const ret = Symbol.iterator;
    return ret;
}
export function __wbg_keys_105f5c0857898f84(arg0) {
    const ret = Object.keys(arg0);
    return ret;
}
export function __wbg_length_186163212ffe79c3(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_length_b03a0fabb109b1e9(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_new_13de428334042d26(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
}
export function __wbg_new_37eb45aaf5eeb820() {
    const ret = new Array();
    return ret;
}
export function __wbg_new_7075786089b89c5e() {
    const ret = new Map();
    return ret;
}
export function __wbg_new_cd4348290afae586() {
    const ret = new Object();
    return ret;
}
export function __wbg_next_178c1651c11432b3(arg0) {
    const ret = arg0.next;
    return ret;
}
export function __wbg_next_af5ac6a08bb0a717() { return handleError(function (arg0) {
    const ret = arg0.next();
    return ret;
}, arguments); }
export function __wbg_prototypesetcall_13162965d1fe7aa3(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
}
export function __wbg_set_8282f7e0d2d01336(arg0, arg1, arg2) {
    const ret = arg0.set(arg1, arg2);
    return ret;
}
export function __wbg_set_d2d33b52458e984a(arg0, arg1, arg2) {
    arg0[arg1 >>> 0] = arg2;
}
export function __wbg_set_e4b9a833d288759a(arg0, arg1, arg2) {
    arg0[arg1] = arg2;
}
export function __wbg_size_9729f8eed378bf8e(arg0) {
    const ret = arg0.size;
    return ret;
}
export function __wbg_value_e0f328965e184931(arg0) {
    const ret = arg0.value;
    return ret;
}
export function __wbindgen_generic_0000000000000001(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
}
export function __wbindgen_generic_0000000000000002(arg0) {
    // Cast intrinsic for `I64 -> Externref`.
    const ret = arg0;
    return ret;
}
export function __wbindgen_generic_0000000000000003(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_generic_0000000000000004(arg0) {
    // Cast intrinsic for `U64 -> Externref`.
    const ret = BigInt.asUintN(64, arg0);
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    table.set(0, undefined);
    table.set(1024, undefined);
    table.set(1025, null);
    table.set(1026, true);
    table.set(1027, false);
}
function wasm_bindgen_a49d381869565574___convert__closures_____invoke___js_sys_2039e88c239d32ce___Function_fn_wasm_bindgen_a49d381869565574___JsValue_____wasm_bindgen_a49d381869565574___sys__Undefined___js_sys_2039e88c239d32ce___Function_fn_wasm_bindgen_a49d381869565574___JsValue_____wasm_bindgen_a49d381869565574___sys__Undefined_______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_a49d381869565574___convert__closures_____invoke___js_sys_2039e88c239d32ce___Function_fn_wasm_bindgen_a49d381869565574___JsValue_____wasm_bindgen_a49d381869565574___sys__Undefined___js_sys_2039e88c239d32ce___Function_fn_wasm_bindgen_a49d381869565574___JsValue_____wasm_bindgen_a49d381869565574___sys__Undefined_______true_(arg0, arg1, arg2, arg3);
}

const WasmDocumentFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wasmdocument_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function debugString(val) {
    switch (typeof val) {
        // primitive types
        case 'number':
        case 'boolean':
        case 'undefined':
        return `${val}`;
        case 'string':
        return JSON.stringify(val);
        case 'bigint':
        return `${val}n`;
        case 'symbol':
        return val.description !== undefined
            ? `Symbol(${val.description})`
            : 'Symbol';
        case 'function':
        return typeof val.name === 'string' && val.name !== ''
            ? `Function(${val.name})`
            : 'Function';
        case 'object': {
            if (val === null) {
                return 'null';
            }
            // objects
            if (Array.isArray(val)) {
                return '[' + Array.from(val, debugString).join(', ') + ']';
            }
            // errors
            if (val instanceof Error) {
                return `${val.name}: ${val.message}\n${val.stack}`;
            }

            const toStringOutput = toString.call(val);
            // Test for built-in
            const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

            // Failed to match the standard '[object ClassName]'
            if (className === undefined) {
                return toStringOutput;
            }
            if (className === 'Object') {
                // we're a user defined class or Object
                // JSON.stringify avoids problems with cycles, and is generally much
                // easier than looping through ownProperties of `val`.
                try {
                    return 'Object(' + JSON.stringify(val) + ')';
                } catch (_) {
                    return 'Object';
                }
            }
            // TODO we could test for more things here, like `Set`s and `Map`s.
            return className;
        }
        // Per MDN: 'This list of values is exhaustive.'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
    }
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(bytes) {
    numBytesDecoded += bytes.length;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
        cachedTextDecoder.decode();
        numBytesDecoded = bytes.length;
    }
    return cachedTextDecoder.decode(bytes);
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
