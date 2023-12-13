# brannan.cloud

![Version](https://shields.io/github/package-json/v/bananabrann/bananabrann.dev?cloud?logo=npm)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fbrannan.cloud&logo=vercel&label=brannan.cloud)
<!--- ![Website](https://img.shields.io/website?url=https%3A%2F%2Fbananabrann.dev&logo=microsoft-azure&label=bananabrann.dev) -->

## Setup and installation
This is a super simple site. Nothing fancy is going on.

### How to install

```bash
npm i
```

### Run dev server

```bash
npm run dev
```

> See package.json for other scripts related to this. If you want to be fancy, you can call `npm run dev -- --open`, other just press 'o' on your keyboard (that's a SvelteKit thing).

### Run builds

```bash
npm run build
```

## Running and managing deployments

> On December 12th, 2023, I switched from Azure Static Web Apps (SWA) to Vercel. This is due to SWA not supporting response streams, which is needed to avoid a buffer that causes the site to not render until the website status badges' `Promise` are resolved. That's like a six second load time. Gross. However, Vercel supports response streams while *also* being free. 

brannan.cloud is hosted on Vercel. Vercel includes a CD service. Unlike SWA, Vercel does not require a yaml file for the CD (though you totally could).

To deploy changes to the site, simply merge or push code onto `main`. Feature branches will get a preview/staging site on pull requests thanks to Vercel.

Resources for other apps or services on *.brannan.cloud, such as app services, containers, etc.,  are handled on [Microsoft Azure](https://portal.azure.com/signin/index/).

## Managing the registrar and DNS

Registrar is Google Domains. Namservers should point to [Cloudflare](https://cloudflare.com), the DNS provider. CDN is also provided by Cloudeflare.

> In June 2023, Squarespace bought Google Domains (lame). Eventually, I need to migrate registrar services to Cloudflare.

To make changes, login to those services.

## Secrets and variables

As of December, 2023 with the vendor transfer to Vercel, this GitHub repo no longer requires any secrets.
