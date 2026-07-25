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

# Fix all localhost canonical URLs, RSS/Atom/JSON feed links, and og:type in generated output
find docs -type f \( -name "*.html" -o -name "*.xml" -o -name "*.json" -o -name "*.txt" \) -exec sed -i '' 's|http://127.0.0.1:8000/index.html|https://noyalib.com/|g' {} +
find docs -type f \( -name "*.html" -o -name "*.xml" -o -name "*.json" -o -name "*.txt" \) -exec sed -i '' 's|http://127.0.0.1:8000/|https://noyalib.com/|g' {} +
find docs -type f \( -name "*.html" -o -name "*.xml" -o -name "*.json" -o -name "*.txt" \) -exec sed -i '' 's|http://127.0.0.1:8000|https://noyalib.com|g' {} +

# Normalize page og:type to website
sed -i '' 's|<meta property="og:type" content="article">|<meta property="og:type" content="website">|g' docs/index.html

# Tier 0.1 CI Verification Guard: Fail build if any 127.0.0.1 URL leaks into generated docs
if grep -rn "127.0.0.1" docs/ > /dev/null; then
  echo "❌ ERROR: Localhost 127.0.0.1 leak detected in docs/ output!"
  exit 1
fi

echo "✓ Verified zero localhost leaks in build output."
echo "✓ Build complete. Output generated in docs/"
