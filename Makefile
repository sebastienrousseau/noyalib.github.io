# noyalib.com — content built by ssg, plus the published noyalib-wasm bundle
# for the playground, plus the quality gates the deploy runs.
#
#   make web          build the site into web/public
#   make gates        every check the deploy runs, against the build
#   make serve        http://127.0.0.1:8899
#
# The browser checks need node, puppeteer-core, axe-core and a Chrome; they
# skip when those are absent unless NOYALIB_REQUIRE_BROWSER is set, which CI
# sets so a missing tool is a failure there and never a silent pass.

.PHONY: web gates serve readability seo sitemap-check links a11y-axe reflow focus-order terminal-swap web-console clean

WEB_OUT = web/public
VERSION ?= $(shell cat VERSION)
# CHROME_PATH wins when set (CI sets it); otherwise the first browser found.
CHROME ?= $(if $(CHROME_PATH),$(CHROME_PATH),$(shell for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" /usr/bin/google-chrome /usr/bin/google-chrome-stable; do [ -x "$$c" ] && { echo "$$c"; break; }; done))

web:
	@command -v ssg >/dev/null || { echo "ssg is required: cargo install ssg --version 0.0.56 --locked"; exit 1; }
	@# Always from empty. ssg keeps a plugin cache in its output directory and
	@# an incremental run skips the agentic-discovery files, so a local rebuild
	@# would otherwise produce a different site from CI.
	@rm -rf $(WEB_OUT)
	@# An unclosed code fence does not fail the build: the renderer keeps
	@# swallowing the page into one <pre> and the rest silently disappears.
	@bad=$$(for f in web/content/*.md web/content/*/*.md; do \
	  [ -f "$$f" ] || continue; \
	  n=$$(grep -c '^```' "$$f"); \
	  [ $$((n % 2)) -eq 0 ] || echo "$$f ($$n fences)"; \
	done); \
	if [ -n "$$bad" ]; then echo "unclosed code fence:"; echo "$$bad" | sed 's/^/  /'; exit 1; fi
	ssg build -f web/ssg.toml
	@# The stylesheet the pages load: both sources, in order, minified.
	@python3 scripts/minify-css.py $(WEB_OUT)/site.css web/_layouts/styles.css web/_layouts/brand.css
	@python3 scripts/minify-css.py $(WEB_OUT)/playground.css web/_layouts/playground.css
	@for a in main.js theme-init.js logo.svg favicon.ico; do cp -f "web/_layouts/$$a" "$(WEB_OUT)/$$a"; done
	@# terminal.js is loaded without defer, so it is on the critical path;
	@# playground.js runs on one page. Both are minified; main.js is left as
	@# is because it is referenced with an integrity hash from its bytes.
	@for a in terminal.js playground.js; do python3 scripts/minify-js.py "web/_layouts/$$a" "$(WEB_OUT)/$$a"; done
	@if command -v node >/dev/null 2>&1; then \
	  for a in $(WEB_OUT)/*.js; do node --check "$$a" >/dev/null 2>&1 || { echo "web: $$a does not parse"; exit 1; }; done; \
	fi
	@# The playground engine: the published npm bundle, vendored at the
	@# release the site names (see web/wasm/README.md).
	@mkdir -p $(WEB_OUT)/wasm && cp -f web/wasm/noyalib_wasm.js web/wasm/noyalib_wasm_bg.js web/wasm/noyalib_wasm_bg.wasm $(WEB_OUT)/wasm/
	@python3 scripts/fix-manifest.py $(WEB_OUT)/manifest.json
	@python3 scripts/flatten-highlight.py $(WEB_OUT)
	@python3 scripts/focusable-code.py $(WEB_OUT)
	@python3 scripts/inline-theme.py $(WEB_OUT) web/_layouts/theme-init.js
	@python3 scripts/faq-schema.py $(WEB_OUT)/faq/index.html
	@python3 scripts/article-schema.py $(WEB_OUT)
	@python3 scripts/gen-news-sitemap.py web/content/news $(WEB_OUT)/news-sitemap.xml
	@mkdir -p $(WEB_OUT)/images && cp -f web/_layouts/images/social-card.png $(WEB_OUT)/images/
	@# ssg fingerprints its syntax-highlighting stylesheet but emits the page
	@# referencing the bare name, so /highlight.css was a 404 on every page
	@# of the previous site.
	@h=$$(ls $(WEB_OUT)/highlight.*.css 2>/dev/null | head -1); test -n "$$h" && cp -f "$$h" "$(WEB_OUT)/highlight.css" || true
	@# Stamp the release the site reflects.
	@find $(WEB_OUT) -name '*.html' -exec sed -i.bak 's/NOYALIB_RELEASE/v$(VERSION)/g' {} + 2>/dev/null || \
	 find $(WEB_OUT) -name '*.html' -exec sed -i '' 's/NOYALIB_RELEASE/v$(VERSION)/g' {} +
	@find $(WEB_OUT) -name '*.html.bak' -delete 2>/dev/null || true
	@printf 'noyalib.com\n' > $(WEB_OUT)/CNAME
	@# Without this GitHub Pages runs its Jekyll filter over the artefact and
	@# drops anything beginning with a dot or an underscore.
	@touch $(WEB_OUT)/.nojekyll
	@# Pages will not serve a dot directory even with .nojekyll present, so
	@# the agent manifests are published at the root as well.
	@# The generator's manifest names itself with an HTTP transport nothing
	@# serves; replace it with the server that exists, at both paths.
	@python3 scripts/mcp-manifest.py $(WEB_OUT) $(VERSION)
	@test -f $(WEB_OUT)/.well-known/ai-plugin.json && cp -f $(WEB_OUT)/.well-known/ai-plugin.json $(WEB_OUT)/ai-plugin.json || true
	@python3 scripts/llms.py $(WEB_OUT)
	@# ssg writes a copy of the site-level files into every page directory.
	@for f in sitemap.xml news-sitemap.xml rss.xml robots.txt manifest.json; do find $(WEB_OUT) -mindepth 2 -name "$$f" -delete; done
	@rm -rf $(WEB_OUT)/.meta $(WEB_OUT)/.ssg-cache $(WEB_OUT)/.ssg-plugin-cache.json
	@python3 scripts/gen-sitemap.py $(WEB_OUT)
	@python3 scripts/noindex.py $(WEB_OUT)
	@python3 scripts/redirects.py $(WEB_OUT)
	@python3 scripts/notfound.py $(WEB_OUT)
	@printf 'site: %s page(s), %s\n' "$$(find $(WEB_OUT) -name '*.html' | wc -l | xargs)" "$$(du -sh $(WEB_OUT) | cut -f1)"

gates: readability seo sitemap-check links a11y-axe reflow focus-order terminal-swap web-console
	@issues="$$(python3 -c 'import json;print(json.load(open("$(WEB_OUT)/accessibility-report.json"))["total_issues"])')"; \
	 echo "WCAG 2.2 issues reported by ssg: $$issues"; [ "$$issues" = "0" ]

# The band is a developer-documentation register: plain English a working
# engineer reads quickly (Flesch ease 55 to 75, grade 5 to 9). It is wider
# than an institutional site's band on purpose; the pages here explain code,
# and a sentence that names three crates and a feature flag is dense enough.
readability:
	python3 scripts/readability.py $(WEB_OUT) --min-ease 55 --max-ease 75 --min-grade 5 --max-grade 9

seo:
	python3 scripts/seocheck.py $(WEB_OUT)

sitemap-check:
	python3 scripts/check-sitemap.py $(WEB_OUT)

links:
	python3 scripts/linkcheck.py $(WEB_OUT)

# One recipe for every browser check: serve the build, run the script, stop
# the server, and skip (or fail under NOYALIB_REQUIRE_BROWSER) when the
# browser tooling is absent.
define browser_check
	@command -v node >/dev/null || { echo "$(1): node is required"; exit 1; }
	@if [ -z "$(CHROME)" ] || [ ! -x "$(CHROME)" ]; then \
	   if [ -n "$$NOYALIB_REQUIRE_BROWSER" ]; then echo "$(1): no Chrome found"; exit 1; fi; echo "$(1): no Chrome found, skipping"; exit 0; fi; \
	 node -e "import('puppeteer-core')" >/dev/null 2>&1 || { \
	   if [ -n "$$NOYALIB_REQUIRE_BROWSER" ]; then echo "$(1): puppeteer-core is not installed"; exit 1; fi; \
	   echo "$(1): puppeteer-core is not installed, skipping (npm install --no-save puppeteer-core axe-core)"; exit 0; }; \
	 (cd $(WEB_OUT) && python3 -m http.server 8899 >/dev/null 2>&1 & echo $$! > /tmp/noyalib-$(1).pid); \
	 sleep 2; \
	 CHROME_PATH="$(CHROME)" NOYALIB_BASE_URL=http://127.0.0.1:8899 node web/tests/$(2); \
	 status=$$?; kill "$$(cat /tmp/noyalib-$(1).pid)" 2>/dev/null; rm -f /tmp/noyalib-$(1).pid; exit $$status
endef

a11y-axe:
	$(call browser_check,a11y-axe,a11y.mjs)

reflow:
	$(call browser_check,reflow,reflow.mjs)

focus-order:
	$(call browser_check,focus-order,focus-order.mjs)

terminal-swap:
	$(call browser_check,terminal-swap,terminal-swap.mjs)

web-console:
	$(call browser_check,web-console,console.mjs)

serve:
	@test -d $(WEB_OUT) || { echo "build the site first: make web"; exit 1; }
	cd $(WEB_OUT) && python3 -m http.server 8899

clean:
	rm -rf $(WEB_OUT)
