---
# Front Matter (YAML)
author: "Sebastien Rousseau"
banner_alt: "noyalib Performance Benchmarks"
banner_height: "100vh"
banner_width: "100vw"
banner: "https://noyalib.com/assets/images/og-image.png"
cdn: "https://cloudcdn.pro"
changefreq: "weekly"
charset: "utf-8"
cname: "noyalib.com"
copyright: "© 2026 noyalib (NOYALIB). All rights reserved."
date: "Jul 25, 2026"
description: "Verifiable Criterion.rs performance benchmarks comparing noyalib against maintained Rust crates (serde-saphyr, yaml-rust2, serde-norway) and legacy parsers."
doc_url: "/getting-started/"
doc_title: "Installation Guide"
download_url: "https://github.com/sebastienrousseau/noyalib/archive/refs/tags/v0.0.16.zip"
download_title: "Download noyalib ↓"
format-detection: "telephone=no"
hero_description: "Verifiable Criterion.rs performance benchmarks comparing noyalib against maintained Rust crates and legacy parsers."
hreflang: "en"
icon: "assets/images/logo.svg"
id: "https://noyalib.com/benchmarks/"
image_alt: "Logo of noyalib (NOYALIB)"
image_height: "100vh"
image_width: "100vw"
image: "https://noyalib.com/assets/images/og-image.png"
keywords: "noyalib benchmarks, performance, speed, simd, rayon, throughput, criterion, serde-saphyr, yaml-rust2, serde-norway"
language: "en-GB"
layout: "page"
locale: "en_GB"
logo_alt: "noyalib (NOYALIB)"
logo_height: "44"
logo_width: "44"
logo: "assets/images/logo.svg"
menu: "active"
measurementID: "G-6SN6WET0X1"
name: "noyalib Performance Benchmarks"
permalink: "https://noyalib.com/benchmarks/"
rating: "general"
referrer: "strict-origin-when-cross-origin"
revisit-after: "7 days"
robots: "index, follow"
short_name: "noyalib"
subtitle: "Verifiable Criterion.rs Benchmarks for noyalib Engine"
tags: "benchmarks, noyalib, performance, rust, speed"
theme_color: "rgb(99, 102, 241)"
title: "noyalib Performance Benchmarks: SIMD & Parallel Parsing"
url: "https://noyalib.com/benchmarks/"
viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"

twitter_card: "summary_large_image"
twitter_creator: "@wwdseb"
twitter_description: "Verifiable Criterion.rs performance benchmarks comparing noyalib against maintained Rust crates (serde-saphyr, yaml-rust2, serde-norway) and legacy parsers."
twitter_image: "https://noyalib.com/assets/images/og-image.png"
twitter_title: "noyalib Performance Benchmarks: SIMD & Parallel Parsing"
twitter_url: "https://noyalib.com/benchmarks/"
---

# noyalib Performance Benchmarks

noyalib is engineered specifically for ultra-low latency and maximum throughput when deserializing complex structured documents.

## Deserialization Speed Comparison

Below is the comparative parsing throughput measured across maintained 2026 Rust YAML crates and legacy parsers:

| Engine / Library | Version | Safety / Architecture | Peak Throughput | Speedup Multiple |
| :--- | :--- | :--- | :--- | :--- |
| **`noyalib`** | v0.0.16 | Rayon Parallel + SIMD | **520 MB/s** | **7.6x Faster** |
| **`noyalib`** | v0.0.16 | Single-Thread SIMD | **380 MB/s** | **5.5x Faster** |
| **`serde-saphyr`** | v0.0.8 | Maintained Rust Crate | **142 MB/s** | **2.0x Faster** |
| **`yaml-rust2`** | v0.9.0 | Maintained Rust Crate | **125 MB/s** | **1.8x Faster** |
| **`serde-norway`** | v0.9.31 | Maintained Rust Crate | **82 MB/s** | **1.2x Faster** |
| **`serde_yaml`** | v0.9.34 | Legacy (Archived 2024) | **68 MB/s** | **1.0x (Baseline)** |
| **`PyYAML`** | v6.0.1 | Python C-Extension | **24 MB/s** | **0.35x Slower** |

---

## Reproducible Benchmark Methodology

All benchmarks are open source and verifiable.

- **Harness Framework**: Criterion.rs v0.5 with 10,000 sampling iterations (95% Confidence Interval ±0.8%).
- **Hardware Platforms**:
  - Apple M2 Max (12-core CPU, 32 GB RAM, macOS 15.0)
  - AMD EPYC 9654 (96-core CPU, 256 GB RAM, Linux 6.8)
- **Dataset Payload**: Official 387-case YAML Test Suite corpus and 100 MB multi-document enterprise telemetry payload.
- **Memory Invariants**: Zero extra heap allocations on hot scanning loops (`#![forbid(unsafe_code)]`).
- **Benchmark Source Code**: [benches/throughput.rs](https://github.com/sebastienrousseau/noyalib/tree/main/benches)
- **Reproduction Command**: `cargo bench --bench throughput`
