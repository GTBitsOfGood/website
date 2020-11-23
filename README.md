<h1 align="center">Welcome to BoG Web 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/bholmesdev">
    <img alt="Twitter: bholmesdev" src="https://img.shields.io/twitter/follow/bholmesdev.svg?style=social" target="_blank" />
  </a>
</p>

> The official landing site for Bits of Good 🚀

## Tech stack breakdown

The bits of good landing page is built on some modern tooling to keep everything nice and future-proof. Let's dive into what we're using.

### Our frontend framework: SvelteJS

Everything you see is built on [SvelteJS](https://svelte.dev), a component-based framework that magically disappears ✨ There are countless reasons we chose this framework, as it brings a host of benefits for decreasing bundle size and load times. However, we mainly chose it because of how easy the syntax is to understand! You can read more [here](https://dev.to/bholmesdev/why-sveltejs-may-be-the-best-framework-for-new-web-devs-205i) to learn why it's so awesome, or just [dive into the docs](https://svelte.dev/docs) to start experimenting yourself.

#### Sapper

Along with Svelte, we are using [Sapper](https://sapper.svelte.dev) to make wiring everything up a bit easier. Mainly, Sapper provides:

- Automatic client-side routing out of the box. Basically, any component in the `src/routes` directory becomes its own page you can link to using a regular old `<a>` tag!
- Preloading of information before loading the page. This makes it easy to fetch our website's text content and other resources before the initial page load.
- Spinning up a server to serve all our pages, complete with server-side rendering!

### Our site content: Contentful

For basically every text field you see on the site, we're fetching it using [Contentful](https://www.contentful.com/). This is a [headless CMS](https://www.storyblok.com/tp/headless-cms-explained) that allows us to host all of our images, text, markdown, etc. in one place.

This is a huge benefit for our designers, who can now just edit a textbox or upload an image to see it appear on the site!

## Install Dependencies

```sh
yarn install
```

## Set up Contentful content model

For external contributors or contributors that don't have access to Bits of Good's Contentful API key, you can run the `seed-contentful` script to seed a [data export](./contentful/export.json) into your own Contentful account

Script Usage: `yarn seed-contentful`

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API. It will import the data export into your Contentful space and create a local `.env` with environment variables to retrieve data from Contentful.

## Start up the site

If you're working in development, run the following to build + run the site with live reloading goodness:

```sh
yarn dev
```

For production builds, run the following to build and start the site:

```sh
yarn build && yarn start
```

In either case, you should be able to visit `localhost:3000` to see the website in action!

## Run the tests

This site uses [Cypress](https://www.cypress.io/) for thorough end-to-end testing. To start up the testing environment, you can run:

```sh
yarn test
```

This will start the server and open Cypress. You can (and should!) add tests in `cypress/integration/spec.js` — consult the [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) for more information.

## Contributors

👤 **Ben &#34;Over-engineered&#34; Holmes**

- Twitter: [@bholmesdev](https://twitter.com/bholmesdev)
- Github: [@Holben888](https://github.com/Holben888)

👤 **Rishov Sarkar**

- Twitter: [@arkanemoose](https://twitter.com/arkanemoose)
- Github: [@ArkaneMoose](https://github.com/arkanemoose)

👤 **Max Karpawich**

- Website: [karpawich.me](https://karpawich.me)
- Github: [@karpawich](https://github.com/karpawich)

## Show your support

Give a ⭐️ if this project helped you!
