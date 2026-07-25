# Makefile for noyalib.github.io

# Default target — build static site using Static Site Generator SSG
.PHONY: build
build:
	@chmod +x build.sh
	@./build.sh

.PHONY: clean
clean:
	rm -rf docs public

.PHONY: serve
serve: build
	python3 -m http.server 8085 --directory docs
