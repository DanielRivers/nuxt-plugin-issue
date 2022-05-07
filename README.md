# Issue, including the Algolia module causes auto import of plugins to fail

Run project and will see the below warning in the console. 
`[Vue warn]: Property "$myPlugin" was accessed during render but is not defined on instance.`

The plugin will work find though despite the warning.

The project I discovered this on it was reporting an error not warning which affects SPA behaviour.

To resolve the error simply remove the algolia settings from the nuxt config



# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
