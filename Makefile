.PHONY: build serve clean verify

# Default target — build static site using Shokunin SSG
build:
	@./build.sh

# Serve public/ locally
serve:
	@python3 -m http.server 8085 --directory docs

# Clean build artifacts
clean:
	@rm -rf docs public output
