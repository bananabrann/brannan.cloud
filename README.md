# The Brannan Cloud

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/bananabrann/brannan.cloud/.github%2Fworkflows%2Fazure-static-web-apps.yml?logo=github-actions)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fbrannan.cloud&logo=azure&label=root)
![Website](https://img.shields.io/website?url=https%3A%2F%2Ftv.brannan.cloud&logo=azure&label=tv)
![Website](https://img.shields.io/website?url=https%3A%2F%2Ffiles.brannan.cloud&logo=azure&label=files)
![Website](https://img.shields.io/website?url=http%3A%2F%2F146.190.0.104&logo=digitalocean&label=chat)

The personal website for me, @bananabrann! This is the root website for all my apps.

## Deploying changes to prod

brannan.cloud is hosted on **Azure**. Deployments are done with **GitHub Actions**. DNS is provided by **CloudFlare**.

Changes pushed to branch `main` is what is deployed to production.

SvelteKit is configured for deployments with the Azure SWA adapter: [geoffrich/svelte-adapter-azure-swa](https://github.com/geoffrich/svelte-adapter-azure-swa).

## Environment setup for CI/CD

In order for GitHub Actions to deploy to Azure, the project on GitHub needs the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret, which is the deployment token provided by Azure SWA.
