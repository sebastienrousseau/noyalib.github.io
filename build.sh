#!/usr/bin/env bash
set -euo pipefail

# build.sh — Build noyalib.github.io using Static Site Generator SSG (ssg build)
# Modern SSG Pipeline supporting _posts, _layouts, and docs output

echo "==> Building noyalib.github.io with Static Site Generator SSG..."

# Execute Static Site Generator SSG build subcommand
ssg build -c=_posts -t=_layouts -o=docs

# Copy assets directory to docs output
cp -r assets docs/

# Create CNAME in docs output directory for GitHub Pages
echo "noyalib.com" > docs/CNAME

echo "✓ Build complete. Output generated in docs/"
