# create-sagar-app

A CLI tool to create MERN stack projects with best practices and modern tooling.

## Features

- 🚀 MERN Stack (MongoDB, Express, React, Node.js)
- 📦 Monorepo setup with Turborepo
- 🔥 TypeScript support
- ⚡️ Vite for React development
- 🔄 tRPC for type-safe API calls
- 📱 Modern and responsive UI
- 🛠️ ESLint and TypeScript configuration
- 🎨 Tailwind CSS for styling
- 🧪 Testing setup included

## Quick Start

```bash
# Using npm
npx create-sagar-app my-app

# Using yarn
yarn create sagar-app my-app

# Using pnpm
pnpm create sagar-app my-app
```

## Project Structure

```
my-app/
├── apps/
│   ├── client/          # React frontend
│   └── server/          # Express backend
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Requirements

- Node.js 18 or later
- pnpm (recommended) or npm or yarn

## Development

After creating your project:

```bash
cd my-app
pnpm install
pnpm dev
```

This will start both the client and server in development mode.

## License

MIT

## Author

Sagar
