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

## 🔐 Cryptographic Verification

**All releases are signed with Cosign** using GitHub OIDC keyless signing and include **SLSA v1 provenance attestation**, all logged to the [Rekor transparency log](https://rekor.sigstore.dev).

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

### 🧾 Verify SLSA v1 Provenance Attestation

```bash
# Download the attestation
curl -L -O "https://github.com/stasher-dev/stasher-website/releases/download/$VERSION/checksums.txt.intoto.jsonl"

# Option 1: Verify with slsa-verifier (recommended)
# Install: go install github.com/slsa-framework/slsa-verifier/v2/cli/slsa-verifier@latest
slsa-verifier verify-artifact \
  --provenance-path checksums.txt.intoto.jsonl \
  --source-uri github.com/stasher-dev/stasher-website \
  --source-tag $VERSION \
  checksums.txt

# Option 2: Manual inspection with cosign
cosign verify-attestation \
  --certificate-identity-regexp="https://github.com/stasher-dev/stasher-website/.*" \
  --certificate-oidc-issuer=https://token.actions.githubusercontent.com \
  --type=https://slsa.dev/provenance/v1 \
  checksums.txt | jq .payload -r | base64 -d | jq
```

### Runtime Verification

Since this is deployed as a Cloudflare Worker serving static content, you can verify the deployed site matches signed releases:

```bash
# Check deployed website (if version metadata is exposed)
curl -s https://stasher.dev/ | grep -o 'version.*' || echo "Version metadata not exposed in static site"

# Cross-reference with GitHub releases
gh release list -R stasher-dev/stasher-website
```

### 🏗️ What This Proves

**✅ Source Integrity** - Website matches signed GitHub releases  
**✅ Build Authenticity** - Code was built by verified GitHub Actions  
**✅ Content Security** - All static assets are verifiable  
**✅ Deployment Traceability** - Direct path from source to production  
**✅ Provenance** - SLSA v1 attestation captures complete build metadata  
**✅ Transparency** - All signatures logged to public [Rekor](https://rekor.sigstore.dev) log

The SLSA attestation contains detailed metadata about:
- **Source commit** and repository
- **Build environment** (Node.js version, OS, dependencies)
- **Build process** (exact commands, working directory)
- **GitHub Actions context** (workflow, actor, run ID)

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