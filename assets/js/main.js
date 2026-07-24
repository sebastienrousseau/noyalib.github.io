/* ==========================================================================
   noyalib.github.io — Interactive Web Experience & Live Engine Simulator
   WCAG 2.1 AAA Keyboard Navigable & Zero External Dependencies
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeroCodeTabs();
  initCopyButtons();
  initEcosystemTabs();
  initLiveParserDemo();
  initBackToTop();
  initKeyboardAccessibility();
});

/* --------------------------------------------------------------------------
   1. Theme Switcher (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('noyalib-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(toggleBtn, savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('noyalib-theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

/* --------------------------------------------------------------------------
   2. Hero Code Window Tab Switcher
   -------------------------------------------------------------------------- */
const HERO_SNIPPETS = {
  rust: `<span class="syn-comment">// Cargo.toml: noyalib = { version = "0.0.16", features = ["simd", "rayon"] }</span>
<span class="syn-kw">use</span> noyalib::{parallel, Value, Result};

<span class="syn-kw">fn</span> <span class="syn-fn">main</span>() -> Result&lt;()&gt; {
    <span class="syn-kw">let</span> yaml_data = <span class="syn-str">r#"
    name: Noya Engine
    version: 0.0.16
    features: [SIMD, Rayon, SafeRust, MCP, LSP]
    performance: 520MB/s
    "#</span>;

    <span class="syn-comment">// Parallel Rayon multi-document deserialization</span>
    <span class="syn-kw">let</span> parsed: Value = parallel::<span class="syn-fn">from_str</span>(yaml_data)?;
    <span class="syn-fn">println!</span>(<span class="syn-str">"Parsed in parallel: {}"</span>, parsed[<span class="syn-str">"name"</span>]);
    <span class="syn-kw">Ok</span>(())
}`,
  cli: `<span class="syn-comment"># Install high-speed Noya CLI</span>
<span class="syn-kw">$</span> cargo install noya-cli

<span class="syn-comment"># Validate & format YAML against JSON Schema 2020-12</span>
<span class="syn-kw">$</span> noya validate config.yaml --schema schema.json --strict

<span class="syn-comment"># Convert YAML to optimized JSON at 520 MB/s</span>
<span class="syn-kw">$</span> noya convert config.yaml --out config.json --format json --pretty`,

  wasm: `<span class="syn-comment">// WebAssembly Client & Edge Runtime (Browser / Cloudflare Workers)</span>
<span class="syn-kw">import</span> { parseYaml, validateSchema } <span class="syn-kw">from</span> <span class="syn-str">'noyalib-wasm'</span>;

<span class="syn-kw">const</span> yamlDoc = <span class="syn-str">\`
server:
  port: 8080
  security: post-quantum
\`</span>;

<span class="syn-comment">// High-speed browser parsing without native overhead</span>
<span class="syn-kw">const</span> data = parseYaml(yamlDoc);
console.log(<span class="syn-str">'Parsed WASM:'</span>, data.server.port);`,

  mcp: `<span class="syn-comment"># Start Model Context Protocol (MCP) Server for AI Models</span>
<span class="syn-kw">$</span> cargo install noyalib-mcp
<span class="syn-kw">$</span> noyalib-mcp --serve --port 9090

<span class="syn-comment">// AI Agent Integration (Claude / GPT-4 / Antigravity):</span>
<span class="syn-comment">// Exposes tools: parse_yaml, validate_schema, generate_yaml_schema</span>
{
  <span class="syn-str">"jsonrpc"</span>: <span class="syn-str">"2.0"</span>,
  <span class="syn-str">"method"</span>: <span class="syn-str">"tools/call"</span>,
  <span class="syn-str">"params"</span>: { <span class="syn-str">"name"</span>: <span class="syn-str">"parse_yaml"</span>, <span class="syn-str">"arguments"</span>: { <span class="syn-str">"input"</span>: <span class="syn-str">"key: val"</span> } }
}`,

  lsp: `<span class="syn-comment"># Language Server Protocol (LSP) Server for Editors (VS Code, Neovim)</span>
<span class="syn-kw">$</span> cargo install noyalib-lsp
<span class="syn-kw">$</span> noyalib-lsp --stdio

<span class="syn-comment">// Features enabled in VS Code / Editor:</span>
<span class="syn-comment">// • Real-time syntax error recovery (parse_lenient)</span>
<span class="syn-comment">// • Schema hover documentation & autocompletion</span>
<span class="syn-comment">// • On-the-fly diagnostic linting</span>`
};

function initHeroCodeTabs() {
  const tabs = document.querySelectorAll('.hero-code-window .code-tab-btn');
  const codeDisplay = document.getElementById('hero-code-display');
  if (!tabs.length || !codeDisplay) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const snippetKey = tab.getAttribute('data-snippet');
      if (HERO_SNIPPETS[snippetKey]) {
        codeDisplay.innerHTML = HERO_SNIPPETS[snippetKey];
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. One-Click Copy to Clipboard
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      let textToCopy = '';

      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) textToCopy = el.innerText || el.textContent;
      } else {
        const codeEl = btn.parentElement.querySelector('code, pre');
        if (codeEl) textToCopy = codeEl.innerText || codeEl.textContent;
      }

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy.trim()).then(() => {
          const origText = btn.innerHTML;
          btn.innerHTML = '✓ Copied!';
          btn.style.color = '#4ade80';
          setTimeout(() => {
            btn.innerHTML = origText;
            btn.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Clipboard copy failed:', err);
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Ecosystem Explorer Tabs
   -------------------------------------------------------------------------- */
const ECOSYSTEM_DATA = {
  noyalib: {
    title: 'noyalib (Core Crate)',
    desc: 'The foundational Rust engine. Zero-copy SIMD scanning, Rayon parallel multi-document parsing, JSON Schema 2020-12 validation, and 100% safe Rust.',
    install: 'cargo add noyalib',
    features: [
      'Zero-copy byte dispatch with SIMD SWAR/SSE2 acceleration',
      'Multi-document parallel parsing via Rayon thread pool',
      'Schema validation & schemars derive integration',
      'Serde 0.9 compatibility shim and zero memory leakage'
    ],
    snippet: `use noyalib::{parallel, Value};

let docs = parallel::values("--- doc1: val --- doc2: val")?;
assert_eq!(docs.len(), 2);`
  },
  'noya-cli': {
    title: 'noya-cli (Terminal Utility)',
    desc: 'High-speed command-line interface for querying, formatting, schema validation, and instant JSON/YAML conversion.',
    install: 'cargo install noya-cli',
    features: [
      'Instant CLI formatting & YAML linting',
      'JSON Schema validation against untrusted files',
      'Fast streaming conversion for large dataset files',
      'Built-in benchmark runner & diagnostic tools'
    ],
    snippet: `$ noya validate --schema schema.json input.yaml
✓ Validation passed in 0.42ms!`
  },
  'noyalib-wasm': {
    title: 'noyalib-wasm (WebAssembly)',
    desc: 'Ultra-fast WebAssembly runtime designed for browsers, Node.js, and Cloudflare Workers with zero native toolchain requirements.',
    install: 'npm install noyalib-wasm',
    features: [
      'Optimized with wasm-opt for tiny bundle size',
      'Direct JS object deserialization',
      'Edge runtime support (V8, Cloudflare, Deno, Bun)',
      '100% memory safe sandboxed execution'
    ],
    snippet: `import { parse } from 'noyalib-wasm';
const data = parse('name: Noya WASM');`
  },
  'noyalib-mcp': {
    title: 'noyalib-mcp (AI Model Server)',
    desc: 'Model Context Protocol (MCP) server integration, exposing native YAML/schema capabilities to AI agents (Claude, GPT-4, Antigravity).',
    install: 'cargo install noyalib-mcp',
    features: [
      'Standardized MCP JSON-RPC 2.0 interface',
      'Automated schema generation for AI outputs',
      'Safe sandboxed execution of agent data pipelines',
      'Zero latency local RPC socket handling'
    ],
    snippet: `$ noyalib-mcp --serve --port 9090
[INFO] MCP server listening for AI tool invocations.`
  },
  'noyalib-lsp': {
    title: 'noyalib-lsp (IDE Language Server)',
    desc: 'Language Server Protocol server providing real-time syntax checking, schema validation, autocompletion, and error recovery in VS Code.',
    install: 'cargo install noyalib-lsp',
    features: [
      'Fault-tolerant parse_lenient error recovery',
      'Real-time schema hover documentation',
      'Instant error diagnostic highlights',
      'Compatible with VS Code, Neovim, Emacs, and Zed'
    ],
    snippet: `$ noyalib-lsp --stdio
[INFO] Language Server ready for editor connections.`
  }
};

function initEcosystemTabs() {
  const tabs = document.querySelectorAll('.eco-tab-btn');
  const titleEl = document.getElementById('eco-title');
  const descEl = document.getElementById('eco-desc');
  const installEl = document.getElementById('eco-install-cmd');
  const featuresEl = document.getElementById('eco-features-list');
  const snippetEl = document.getElementById('eco-snippet');

  if (!tabs.length || !titleEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-eco');
      const data = ECOSYSTEM_DATA[key];
      if (data) {
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        if (installEl) installEl.textContent = data.install;
        if (snippetEl) snippetEl.textContent = data.snippet;

        if (featuresEl) {
          featuresEl.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Live Browser YAML/JSON Parser Demo
   -------------------------------------------------------------------------- */
function initLiveParserDemo() {
  const inputEl = document.getElementById('demo-yaml-input');
  const outputEl = document.getElementById('demo-json-output');
  const formatBtn = document.getElementById('demo-btn-format');
  const statusEl = document.getElementById('demo-status-text');
  const timeEl = document.getElementById('demo-time-text');

  if (!inputEl || !outputEl || !formatBtn) return;

  function runParser() {
    const rawText = inputEl.value;
    const startTime = performance.now();

    try {
      // Light client-side YAML-to-JSON simulator
      const parsed = pseudoYamlParse(rawText);
      const jsonStr = JSON.stringify(parsed, null, 2);
      const duration = (performance.now() - startTime).toFixed(2);

      outputEl.textContent = jsonStr;
      if (statusEl) {
        statusEl.textContent = '✓ Valid YAML / Structured Data';
        statusEl.className = 'status-valid';
      }
      if (timeEl) {
        timeEl.textContent = `Parsed in ${duration} ms (Client Simulator)`;
      }
    } catch (err) {
      outputEl.textContent = `Parse Error: ${err.message}`;
      if (statusEl) {
        statusEl.textContent = '✕ Syntax Warning';
        statusEl.className = 'status-invalid';
      }
    }
  }

  formatBtn.addEventListener('click', runParser);
  inputEl.addEventListener('input', debounce(runParser, 300));
}

// Simple key-value / YAML line parser for in-browser client demo
function pseudoYamlParse(text) {
  const result = {};
  const lines = text.split('\n');

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx !== -1) {
      const key = trimmed.slice(0, colonIdx).trim();
      let val = trimmed.slice(colonIdx + 1).trim();

      // Basic type coercions
      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
      } else if (val === 'true') val = true;
      else if (val === 'false') val = false;
      else if (!isNaN(Number(val)) && val !== '') val = Number(val);
      else val = val.replace(/^['"]|['"]$/g, '');

      result[key] = val;
    }
  });

  return result;
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* --------------------------------------------------------------------------
   6. Back to Top Smooth Scroll
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   7. Keyboard Accessibility (ARIA Tablist Navigation)
   -------------------------------------------------------------------------- */
function initKeyboardAccessibility() {
  const tablists = document.querySelectorAll('[role="tablist"]');
  tablists.forEach(tablist => {
    const tabs = tablist.querySelectorAll('[role="tab"]');
    tabs.forEach((tab, idx) => {
      tab.addEventListener('keydown', e => {
        let targetIdx = null;
        if (e.key === 'ArrowRight') targetIdx = (idx + 1) % tabs.length;
        if (e.key === 'ArrowLeft') targetIdx = (idx - 1 + tabs.length) % tabs.length;

        if (targetIdx !== null) {
          e.preventDefault();
          tabs[targetIdx].focus();
          tabs[targetIdx].click();
        }
      });
    });
  });
}
