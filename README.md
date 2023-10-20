# brannan.cloud
![Version](https://shields.io/github/package-json/v/bananabrann/bananabrann.dev?cloud?logo=npm)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fbananabrann.dev&logo=microsoft-azure&label=bananabrann.dev)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fbrannan.cloud&logo=microsoft-azure&label=brannan.cloud)

# Software
## Setup and installation
#### How to install

```bash
npm i
```

#### Run dev server
```bash
npm run dev
```

> See package.json for other scripts related to this. This is a super simple site, nothing complex is going on.

#### Run builds

```bash
npm run build
```

## Running and managing deployments
Deployments are handled mostly by Azure Static Web Apps (SWA) and the CI/CD that is included with that service. Ensure that the yaml file for the GitHub Action is properly setup. This is a simple website/project, so nothing complex is going on with this process.

Prod environment is on `main`, with feature branches getting their own websites on pull requests thank to Azure SWA environments. To deploy to production, simply merge code into `main`.

# Infrastructure
## Making changes to DNS
For most services, registrar is Google Domains, though eventually I need to migrate to Cloudflare or something else since they sold to SquareSpace (lame). Namservers should point to [Cloudflare](https://cloudflare.com), where DNS records are handled.

To make changes, login to those services.

## Website and system hosting provider
All app services, containers, CDN, etc. are on [Microsoft Azure](https://portal.azure.com/signin/index/).

## Secrets and variables
brannan.cloud requires a secret. Make sure the Azure Static Web App has its approrpriate key in the "Secrets and variables" section of the repo settings.
