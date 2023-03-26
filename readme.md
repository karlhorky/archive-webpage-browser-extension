# Archive Webpage Browser Extension

Chrome extension to archive webpages on [archive.ph](https://archive.ph/) and [the Internet Archive Wayback Machine](https://web.archive.org/)

## How This Extension was Created

[CRXJS](https://github.com/crxjs/chrome-extension-tools) provides [`@crxjs/vite-plugin`](https://crxjs.dev/vite-plugin/), a plugin for [Vite](https://vitejs.dev/), which allows for easy setup of a browser extension.

These tools didn't work out of the box for TypeScript and ESM. The steps that I took to get it working:

```bash
pnpm create vite . --template react-ts
mkdir -p .github/workflows
touch .github/workflows/lint-check-types-and-build.yml # And add workflow with type check and build
echo "\n*.tsbuildinfo" >> .gitignore # Also opened a Vite PR https://github.com/vitejs/vite/pull/12590
yq --inplace --output-format=json \
  '.compilerOptions.skipLibCheck = true' \
  tsconfig.node.json # Also opened a Vite PR https://github.com/vitejs/vite/pull/12591
```
