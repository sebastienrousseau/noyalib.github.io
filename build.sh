#!/usr/bin/env bash
set -euo pipefail

# build.sh — Build noyalib.github.io using Shokunin SSG (ssg build)
# Compiles Markdown content in _posts/ with Tera templates in _layouts/ into docs/ and public/

echo "==> Building noyalib.github.io with Shokunin SSG..."

# Execute Shokunin SSG build subcommand
ssg build -c=_posts -t=_layouts -o=docs

# Copy built assets (CSS, JS, Images) to docs/
mkdir -p docs/assets
cp -R assets/* docs/assets/ 2>/dev/null || true

# Copy static assets (robots.txt, sitemap.xml)
cp robots.txt docs/ 2>/dev/null || true
cp sitemap.xml docs/ 2>/dev/null || true

echo "✓ Build complete. Output generated in docs/"
