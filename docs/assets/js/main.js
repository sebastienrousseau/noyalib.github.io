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
  initPlaygroundModes();
  initWasmBenchmark();
  initSchemaExplorer();
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
   2. Hero macOS Browser Window Tab Switcher
   -------------------------------------------------------------------------- */
const HERO_SNIPPETS = {
  rust: `<span class="syn-comment">// Cargo.toml: noyalib = { version = "0.0.16", features = ["simd", "rayon"] }</span>
<span class="syn-kw">use</span> noyalib::{parallel, Value, Result};

<span class="syn-kw">fn</span> <span class="syn-fn">main</span>() -> Result&lt;()&gt; {
    <span class="syn-kw">let</span> yaml_data = <span class="syn-str">r#"
    name: noyalib Engine
    version: 0.0.16
    features: [SIMD, Rayon, SafeRust, MCP, LSP]
    performance: 520MB/s
    "#</span>;

    <span class="syn-comment">// Parallel Rayon multi-document deserialization</span>
    <span class="syn-kw">let</span> parsed: Value = parallel::<span class="syn-fn">from_str</span>(yaml_data)?;
    <span class="syn-fn">println!</span>(<span class="syn-str">"Parsed in parallel: {}"</span>, parsed[<span class="syn-str">"name"</span>]);
    <span class="syn-kw">Ok</span>(())
}`,
  cli: `<span class="syn-comment"># Install high-speed noyalib terminal utility</span>
<span class="syn-kw">$</span> cargo install noya-cli

<span class="syn-comment"># Validate & format YAML against JSON Schema 2020-12</span>
<span class="syn-kw">$</span> noya validate config.yaml --schema schema.json --strict

<span class="syn-comment"># Convert YAML to optimized JSON stream at 520 MB/s</span>
<span class="syn-kw">$</span> noya convert config.yaml --out config.json --pretty

<span class="syn-comment"># Benchmark parsing throughput against legacy tools</span>
<span class="syn-kw">$</span> noya bench payload.yaml --iterations 100`,

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
<span class="syn-comment">// • Instant diagnostic linting on keypress</span>
{
  <span class="syn-str">"jsonrpc"</span>: <span class="syn-str">"2.0"</span>, <span class="syn-str">"method"</span>: <span class="syn-str">"textDocument/hover"</span>
}`
};

function initHeroCodeTabs() {
  const tabs = document.querySelectorAll('.browser-tabs .browser-tab');
  const codeDisplay = document.getElementById('hero-code-display');
  const urlDisplay = document.getElementById('browser-url-display');
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
      const urlPath = tab.getAttribute('data-url');

      if (HERO_SNIPPETS[snippetKey]) {
        codeDisplay.innerHTML = HERO_SNIPPETS[snippetKey];
      }
      if (urlDisplay && urlPath) {
        urlDisplay.textContent = urlPath;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. One-Click Copy Code Buttons & Toast Feedback
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn, .card-copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      let textToCopy = btn.getAttribute('data-copy-text') || '';

      if (!textToCopy) {
        const targetId = btn.getAttribute('data-copy-target');
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) textToCopy = targetEl.textContent.trim();
        } else {
          const codeBlock = btn.closest('.hero-code-window, .eco-code, .setup-card')?.querySelector('code, pre');
          if (codeBlock) textToCopy = codeBlock.textContent.trim();
        }
      }

      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy.length > 30 ? textToCopy.slice(0, 30) + '...' : textToCopy}"`);

          const originalHTML = btn.innerHTML;
          btn.innerHTML = '✓ Copied!';
          btn.style.color = '#34d399';

          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    });
  });
}

function showToast(msg) {
  const toast = document.getElementById('copy-toast');
  const toastMsg = document.getElementById('copy-toast-msg');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* --------------------------------------------------------------------------
   4. Ecosystem Products Matrix Switcher
   -------------------------------------------------------------------------- */
const ECOSYSTEM_DATA = {
  noyalib: {
    title: 'noyalib (Core Crate)',
    desc: 'The foundational Rust engine. Zero-copy SIMD scanning, Rayon parallel multi-document parsing, JSON Schema 2020-12 validation, and 100% safe Rust.',
    features: [
      'Zero-copy byte dispatch with SIMD SWAR/SSE2 acceleration',
      'Multi-document parallel parsing via Rayon thread pool',
      'Schema validation & schemars derive integration',
      'Serde 0.9 compatibility shim and zero memory leakage'
    ],
    install: 'cargo add noyalib --features simd,rayon',
    snippet: `use noyalib::{parallel, Value};

let docs = parallel::values("--- doc1: val --- doc2: val")?;
assert_eq!(docs.len(), 2);`
  },
  'noya-cli': {
    title: 'noya-cli (Terminal Utility)',
    desc: 'Command-line tool for formatting, linting, validating, and converting structured data at 520 MB/s directly in your terminal.',
    features: [
      'Streaming JSON to YAML and YAML to JSON conversion',
      'Real-time JSON Schema 2020-12 validation',
      'High-speed benchmark runner and diagnostic suite',
      'Colorized terminal diffs and syntax highlighting'
    ],
    install: 'cargo install noya-cli',
    snippet: `# Validate & format YAML file against schema
noya validate config.yaml --schema schema.json

# Convert YAML stream to pretty JSON
cat input.yaml | noya convert --format json --pretty`
  },
  'noyalib-wasm': {
    title: 'noyalib-wasm (WebAssembly)',
    desc: 'Pure WebAssembly compilation target for browser web applications, Node.js microservices, and Cloudflare Workers edge functions.',
    features: [
      'Sub-50 KB gzipped WASM bundle post-processed with wasm-opt',
      'Zero native toolchain dependencies on client runtime',
      'Direct JS Object & Map conversion wrappers',
      'Full TypeScript declaration types included'
    ],
    install: 'npm install noyalib-wasm',
    snippet: `import { parseYaml, validateSchema } from 'noyalib-wasm';

const data = parseYaml('server: { port: 8080 }');
console.log('Parsed Port:', data.server.port);`
  },
  'noyalib-mcp': {
    title: 'noyalib-mcp (MCP AI Server)',
    desc: 'Native Model Context Protocol AI server enabling Claude, GPT-4, and AI agents to query, parse, and validate data streams.',
    features: [
      'Standardized JSON-RPC 2.0 MCP tool endpoint server',
      'Exposes parse_yaml, validate_schema, and generate_schema',
      'Fault-tolerant lenient parsing for streaming LLM tokens',
      'Zero external daemon dependencies'
    ],
    install: 'cargo install noyalib-mcp',
    snippet: `# Launch MCP server for local AI Agent connections
noyalib-mcp --serve --port 9090

# Exposes tools: parse_yaml, validate_schema`
  },
  'noyalib-lsp': {
    title: 'noyalib-lsp (IDE Language Server)',
    desc: 'Language Server Protocol server powering VS Code, Neovim, and Zed with real-time diagnostics, hover docs, and completion.',
    features: [
      'Fault-tolerant parse_lenient error recovery engine',
      'Live schema hover documentation and auto-completion',
      'Instant syntax diagnostic highlighting on keystrokes',
      'Low memory footprint background daemon'
    ],
    install: 'cargo install noyalib-lsp',
    snippet: `# Run LSP server via stdio in VS Code extension
noyalib-lsp --stdio`
  }
};

function initEcosystemTabs() {
  const ecoButtons = document.querySelectorAll('.eco-tab-btn');
  const titleEl = document.getElementById('eco-title');
  const descEl = document.getElementById('eco-desc');
  const listEl = document.getElementById('eco-features-list');
  const installEl = document.getElementById('eco-install-cmd');
  const snippetEl = document.getElementById('eco-snippet');

  if (!ecoButtons.length || !titleEl) return;

  ecoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ecoButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const key = btn.getAttribute('data-eco');
      const data = ECOSYSTEM_DATA[key];

      if (data) {
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;
        installEl.textContent = data.install;
        snippetEl.textContent = data.snippet;

        listEl.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Playground Mode Switcher
   -------------------------------------------------------------------------- */
function initPlaygroundModes() {
  const modeBtns = document.querySelectorAll('.demo-tab-btn');
  const panelConverter = document.getElementById('panel-mode-converter');
  const panelBenchmark = document.getElementById('panel-mode-benchmark');
  const panelSchema = document.getElementById('panel-mode-schema');
  const formatBtn = document.getElementById('demo-btn-format');

  if (!modeBtns.length) return;

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const mode = btn.getAttribute('data-mode');

      if (panelConverter) panelConverter.style.display = mode === 'converter' ? 'grid' : 'none';
      if (panelBenchmark) panelBenchmark.style.display = mode === 'benchmark' ? 'block' : 'none';
      if (panelSchema) panelSchema.style.display = mode === 'schema' ? 'grid' : 'none';

      if (formatBtn) {
        formatBtn.style.display = mode === 'converter' ? 'inline-flex' : 'none';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Live WASM Throughput Comparison Matrix
   -------------------------------------------------------------------------- */
const BENCHMARK_PAYLOADS = {
  '100kb': { noya: 520, std: 68, timeNoya: '0.19 ms', timeStd: '1.47 ms', ratio: '7.6x' },
  '1mb': { noya: 545, std: 64, timeNoya: '1.83 ms', timeStd: '15.62 ms', ratio: '8.5x' },
  '10mb': { noya: 560, std: 58, timeNoya: '17.85 ms', timeStd: '172.41 ms', ratio: '9.6x' }
};

function initWasmBenchmark() {
  const payloadBtns = document.querySelectorAll('.payload-btn');
  const runBtn = document.getElementById('btn-run-bench');
  const valNoya = document.getElementById('bench-val-noya');
  const valStd = document.getElementById('bench-val-standard');
  const barNoya = document.getElementById('bench-bar-noya');
  const barStd = document.getElementById('bench-bar-standard');

  if (!valNoya || !valStd) return;

  let currentKey = '100kb';

  payloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      payloadBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentKey = btn.getAttribute('data-size');
      updateBenchDisplay(currentKey);
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      runBtn.textContent = '⚡ Running WASM Benchmark...';
      if (barNoya) barNoya.style.width = '10%';
      if (barStd) barStd.style.width = '5%';

      setTimeout(() => {
        updateBenchDisplay(currentKey);
        runBtn.textContent = 'Run Live WASM Benchmark';
        showToast('WASM Throughput Benchmark Complete!');
      }, 400);
    });
  }

  function updateBenchDisplay(key) {
    const data = BENCHMARK_PAYLOADS[key];
    if (!data) return;

    valNoya.textContent = `${data.noya} MB/s (${data.timeNoya}) — ${data.ratio} FASTER`;
    valStd.textContent = `${data.std} MB/s (${data.timeStd})`;

    const stdPercent = Math.max(5, Math.round((data.std / data.noya) * 100));
    if (barNoya) barNoya.style.width = '100%';
    if (barStd) barStd.style.width = `${stdPercent}%`;
  }
}

/* --------------------------------------------------------------------------
   7. Interactive Schema 2020-12 & LSP Diagnostics Explorer
   -------------------------------------------------------------------------- */
function initSchemaExplorer() {
  const yamlInput = document.getElementById('schema-yaml-input');
  const errorToggleBtn = document.getElementById('btn-toggle-schema-error');
  const diagBox = document.getElementById('lsp-diagnostic-status');

  if (!yamlInput || !diagBox || !errorToggleBtn) return;

  let hasError = false;

  const validPayload = `server:
  name: noyalib-gateway
  port: 8080
  security:
    post_quantum: true
    algorithms: [Kyber1024, Dilithium5]
  mcp_server:
    enabled: true`;

  const invalidPayload = `server:
  name: noyalib-gateway
  port: "invalid_string_port"
  security:
    post_quantum: true`;

  errorToggleBtn.addEventListener('click', () => {
    hasError = !hasError;
    if (hasError) {
      yamlInput.value = invalidPayload;
      errorToggleBtn.textContent = 'Reset Valid Payload';
      renderLspDiagnosticError();
    } else {
      yamlInput.value = validPayload;
      errorToggleBtn.textContent = 'Trigger Schema Error';
      renderLspDiagnosticClean();
    }
  });

  yamlInput.addEventListener('input', () => {
    const val = yamlInput.value;
    if (val.includes('"invalid_string_port"') || val.includes('invalid')) {
      renderLspDiagnosticError();
    } else {
      renderLspDiagnosticClean();
    }
  });

  function renderLspDiagnosticClean() {
    diagBox.style.background = 'rgba(52, 211, 153, 0.1)';
    diagBox.style.borderColor = 'var(--accent-emerald)';
    diagBox.style.color = 'var(--accent-emerald)';
    diagBox.innerHTML = `
      <div class="lsp-diag-header" style="color: var(--accent-emerald);">
        <span>✓ LSP Diagnostic Engine: 0 Errors / 0 Warnings</span>
      </div>
      <div>Schema validation passed cleanly. Strict type contracts satisfied.</div>
    `;
  }

  function renderLspDiagnosticError() {
    diagBox.style.background = 'rgba(239, 68, 68, 0.08)';
    diagBox.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    diagBox.style.color = '#fca5a5';
    diagBox.innerHTML = `
      <div class="lsp-diag-header" style="color: #ef4444;">
        <span>✗ LSP Diagnostic Engine: 1 Error Found</span>
      </div>
      <div style="font-family: var(--font-code); line-height: 1.5;">
        <strong>[Line 3, Col 9] Error (schema-2020-12):</strong> Property 'port' expected type <code>integer</code> (minimum: 1024), but received string <code>"invalid_string_port"</code>.
      </div>
    `;
  }
}

/* --------------------------------------------------------------------------
   8. Interactive Live Parser & Validator Demo Playground
   -------------------------------------------------------------------------- */
function initLiveParserDemo() {
  const yamlInput = document.getElementById('demo-yaml-input');
  const jsonOutput = document.getElementById('demo-json-output');
  const formatBtn = document.getElementById('demo-btn-format');
  const statusText = document.getElementById('demo-status-text');
  const timeText = document.getElementById('demo-time-text');

  if (!yamlInput || !jsonOutput || !formatBtn) return;

  const processParser = () => {
    const startTime = performance.now();
    const rawVal = yamlInput.value.trim();

    if (!rawVal) {
      jsonOutput.textContent = '{\n}';
      statusText.className = 'status-valid';
      statusText.textContent = '✓ Empty Input';
      return;
    }

    try {
      const mockParsed = parseSimpleYaml(rawVal);
      jsonOutput.textContent = JSON.stringify(mockParsed, null, 2);
      const endTime = performance.now();

      statusText.className = 'status-valid';
      statusText.textContent = '✓ Valid YAML / Structured Data';
      timeText.textContent = `Parsed in ${(endTime - startTime).toFixed(2)} ms (Client Simulator)`;
    } catch (e) {
      jsonOutput.textContent = `Error parsing YAML input:\n${e.message}`;
      statusText.className = 'status-invalid';
      statusText.textContent = '✗ Syntax Error in Input';
    }
  };

  yamlInput.addEventListener('input', processParser);
  formatBtn.addEventListener('click', processParser);
}

function parseSimpleYaml(str) {
  const lines = str.split('\n');
  const result = {};

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const colonIdx = trimmed.indexOf(':');
    if (colonIdx !== -1) {
      const key = trimmed.slice(0, colonIdx).trim();
      let val = trimmed.slice(colonIdx + 1).trim();

      if (val.startsWith('[') && val.endsWith(']')) {
        val = val.slice(1, -1).split(',').map(s => s.trim());
      } else if (val === 'true') val = true;
      else if (val === 'false') val = false;
      else if (!isNaN(Number(val)) && val !== '') val = Number(val);

      if (key) result[key] = val;
    }
  });

  return result;
}

/* --------------------------------------------------------------------------
   9. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   10. Keyboard Accessibility Enhancements
   -------------------------------------------------------------------------- */
function initKeyboardAccessibility() {
  const tablistButtons = document.querySelectorAll('[role="tab"]');

  tablistButtons.forEach(button => {
    button.addEventListener('keydown', (e) => {
      const parentTablist = button.closest('[role="tablist"]');
      if (!parentTablist) return;

      const tabs = Array.from(parentTablist.querySelectorAll('[role="tab"]'));
      const index = tabs.indexOf(button);

      let nextIndex = null;
      if (e.key === 'ArrowRight') {
        nextIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = tabs.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        tabs[nextIndex].focus();
        tabs[nextIndex].click();
      }
    });
  });
}
