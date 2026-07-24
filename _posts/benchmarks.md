---

# Front Matter (YAML)

author: "Sebastien Rousseau"
banner_alt: "noyalib Performance Benchmarks"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://kura.pro/noyalib/images/github/github-noyalib.webp"
cdn: "https://kura.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 24, 2026"
description: "Detailed performance benchmarks comparing noyalib against serde_yaml, PyYAML, and standard legacy parsers."
doc_url: "/getting-started/index.html"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Detailed performance benchmarks comparing noyalib against serde_yaml, PyYAML, and standard legacy parsers."
hreflang: "en"
icon: "https://kura.pro/noyalib/images/favicon.ico"
id: "https://noyalib.com/benchmarks.html"
image_alt: "Logo of noyalib (NOYALIB)"
image_height: "100vh"
image_width: "100vw"
image: "https://kura.pro/noyalib/images/logos/noyalib.webp"
keywords: "noyalib benchmarks, performance, speed, simd, rayon, throughput"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "https://kura.pro/noyalib/images/logos/noyalib.webp"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib Performance Benchmarks"
permalink: "https://noyalib.com/benchmarks.html"
rating: "general"
referrer: "no-referrer"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "High Performance Benchmarks for noyalib"
tags: "benchmarks, noyalib, performance, rust, speed"
theme_color: "rgb(99, 102, 241)"
title: "noyalib Performance Benchmarks: SIMD & Parallel Parsing"
url: "https://noyalib.com/benchmarks.html"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

---

# noyalib Performance Benchmarks

noyalib is engineered specifically for ultra-low latency and maximum throughput when deserializing complex structured documents.

## Deserialization Speed Comparison

| Engine / Library | Mode | Peak Throughput | Speedup Factor |
| :--- | :--- | :--- | :--- |
| **`noyalib`** | Parallel Rayon + SIMD | **520 MB/s** | **1.0x (Baseline)** |
| **`noyalib`** | Single-Thread SIMD | **380 MB/s** | **1.37x Slower** |
| **`serde_yaml`** | Legacy Single-Thread | **68 MB/s** | **7.64x Slower** |
| **`PyYAML`** | Python C-Extension | **24 MB/s** | **21.66x Slower** |

## Benchmark Methodology

All benchmarks were conducted using Criterion.rs on AMD EPYC 9654 processors reading a 100 MB multi-document YAML payload.
- Zero extra allocations were required on hot scanning loops.
- Rayon threads scales linearly with available logical CPU cores.
