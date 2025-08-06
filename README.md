# Stasher Website

website for Stasher - secure secret sharing platform.

## Overview

Static website deployed to [stasher.dev](https://stasher.dev) showcasing the Stasher ecosystem:
- Stasher CLI - Terminal-based secret sharing
- Stasher App - Browser interface with bookmarklet
- Stasher API - Backend infrastructure

## Features

- **Responsive Design** - Works on all devices
- **Static Site** - Fast loading, minimal infrastructure
- **Clean** - Clear value proposition and feature highlights
- **Cross-Project Links** - Directs users to CLI, App, and API repos

## Deployment

**Automated CI/CD Pipeline**

This website features automated deployment via [stasher-ci](https://github.com/stasher-dev/stasher-ci):

- **Automatic Deployment**: Pushes to `main` branch automatically deploy to [stasher.dev](https://stasher.dev)
- **Cloudflare Workers**: Deployed as a high-performance edge application
- **Build Pipeline**: TypeScript compilation, linting, and optimization
- **Zero Downtime**: Seamless updates with Cloudflare's global network

**Deployment Status**: [![CI/CD Pipeline](https://github.com/stasher-dev/stasher-website/actions/workflows/ci.yml/badge.svg)](https://github.com/stasher-dev/stasher-website/actions/workflows/ci.yml)

## Cryptographic Verification

**All releases are signed with Cosign** using GitHub OIDC keyless signing and logged to the [Rekor transparency log](https://rekor.sigstore.dev).

### Verify Website Bundle

The static website bundle is signed during the release process:

```bash
# Install cosign (if you don't have it)
# macOS: brew install cosign
# Linux: see https://docs.sigstore.dev/cosign/installation/

# Get the latest release version
VERSION=$(gh release list -R stasher-dev/stasher-website --limit 1 | cut -f1)

# Download checksums and signature
curl -L -O "https://github.com/stasher-dev/stasher-website/releases/download/$VERSION/checksums.txt"
curl -L -O "https://github.com/stasher-dev/stasher-website/releases/download/$VERSION/checksums.txt.sig"

# Verify signature
cosign verify-blob \
  --certificate-identity-regexp="https://github.com/stasher-dev/stasher-website/.*" \
  --certificate-oidc-issuer=https://token.actions.githubusercontent.com \
  --signature=checksums.txt.sig \
  checksums.txt

# Verify integrity
sha256sum -c checksums.txt
```

### Runtime Verification

Since this is deployed as a Cloudflare Worker serving static content, you can verify the deployed site matches signed releases:

```bash
# Check deployed website (if version metadata is exposed)
curl -s https://stasher.dev/ | grep -o 'version.*' || echo "Version metadata not exposed in static site"

# Cross-reference with GitHub releases
gh release list -R stasher-dev/stasher-website
```

### What This Proves

**Source Integrity** - Website matches signed GitHub releases  
**Build Authenticity** - Code was built by verified GitHub Actions  
**Content Security** - All static assets are verifiable  
**Deployment Traceability** - Direct path from source to production

**Your marketing site deserves the same security as your secrets.** 🛡️

## Project Structure

```
stasher-website/
├── index.html      # Main landing page
├── styles.css      # Site styles
└── README.md       # This file
```

## Related Projects

- **[Stasher CLI](https://github.com/stasher-dev/stasher-cli)** - Terminal version
- **[Stasher App](https://github.com/stasher-dev/stasher-app)** - Secure Browser Interface  
- **[Stasher API](https://github.com/stasher-dev/stasher-api)** - Backend API

## License

BUSL-1.1 - Business Source License with automatic conversion to Apache 2.0 on 2028-08-01