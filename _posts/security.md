---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "noyalib Security Policy"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "monthly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 24, 2026"
description: "Security policy, memory safety invariants, and vulnerability reporting for noyalib."
doc_url: "/getting-started/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.17.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Security policy, memory safety invariants, and vulnerability reporting for noyalib."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/security.html"
image_alt: "Logo of noyalib (NOYALIB)"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib security, memory safety, safe rust, vulnerability policy, sbom"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib Security Policy"
permalink: "https://noyalib.com/security.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Memory Safety & Vulnerability Disclosure"
tags: "security, noyalib, memory-safety, sbom, safe-rust"
theme_color: "rgb(99, 102, 241)"
title: "noyalib Security Policy: Memory Safety & Supply Chain Assurance"
url: "https://noyalib.com/security.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

---

# noyalib Security Policy

Security is a primary design goal of **noyalib**. The library handles untrusted user payloads in high-consequence application environments.

## Memory Safety Guarantee

- **`forbid(unsafe_code)`**: Enforced at the compiler level across `noyalib` and all satellite crates.
- **Panic Resilience**: Recursive parsing depth limits prevent stack overflow vulnerabilities (`max_include_depth`).
- **CycloneDX SBOM**: Automated Software Bill of Materials generated on every release.
