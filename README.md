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

🚀 **Automated CI/CD Pipeline**

This website features automated deployment via [stasher-ci](https://github.com/stasher-dev/stasher-ci):

- **Automatic Deployment**: Pushes to `main` branch automatically deploy to [stasher.dev](https://stasher.dev)
- **Cloudflare Workers**: Deployed as a high-performance edge application
- **Build Pipeline**: TypeScript compilation, linting, and optimization
- **Zero Downtime**: Seamless updates with Cloudflare's global network

**Deployment Status**: [![CI/CD Pipeline](https://github.com/stasher-dev/stasher-website/actions/workflows/ci.yml/badge.svg)](https://github.com/stasher-dev/stasher-website/actions/workflows/ci.yml)

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