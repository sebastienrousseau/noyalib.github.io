---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "noyalib Migration Guide"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "monthly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 24, 2026"
description: "Migration guide for moving from archived serde_yaml 0.9 to high-performance noyalib with zero breaking changes."
doc_url: "/getting-started/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.17.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Migration guide for moving from archived serde_yaml 0.9 to high-performance noyalib with zero breaking changes."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/migration.html"
image_alt: "Logo of noyalib (NOYALIB)"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib migration, serde_yaml, migration guide, rust, upgrade"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib Migration Guide"
permalink: "https://noyalib.com/migration.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Migrating from serde_yaml to noyalib"
tags: "migration, serde_yaml, noyalib, rust, upgrade"
theme_color: "rgb(99, 102, 241)"
title: "noyalib Migration Guide: Moving from serde_yaml 0.9"
url: "https://noyalib.com/migration.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

---

# Migration Guide: Moving from `serde_yaml` to `noyalib`

Upstream `serde_yaml` (0.9) has been archived. **noyalib** provides a drop-in compatibility feature (`compat-serde-yaml`) allowing projects to migrate seamlessly with **zero logic changes**.

---

## 1-Step Cargo Migration

Update your `Cargo.toml`:

```toml
# Old dependency:
# serde_yaml = "0.9"

# Replace with noyalib compatibility feature:
noyalib = { version = "0.0.17", features = ["compat-serde-yaml", "simd"] }
```

## Code Import Alias

In your Rust source code:

```rust
// Old import:
// use serde_yaml::Value;

// Replace with noyalib compatibility module:
use noyalib::compat::serde_yaml as serde_yaml;
use serde_yaml::Value;

fn main() -> Result<(), serde_yaml::Error> {
    let val: Value = serde_yaml::from_str("name: noyalib")?;
    println!("Migrated: {}", val["name"]);
    Ok(())
}
```

## Performance Uplift Post-Migration

| Metric | `serde_yaml` 0.9 | `noyalib` (SIMD + Rayon) | Improvement |
| :--- | :--- | :--- | :--- |
| **Parsing Speed** | 68 MB/s | **520 MB/s** | **7.6x Faster** |
| **Safety Invariant** | Contains Unsafe | **100% Safe (`forbid(unsafe_code)`)** | **Guaranteed Safe** |
| **Maintenance** | Archived | **Active (2026 Core Support)** | **Active Maintenance** |
