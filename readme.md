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
echo '{\n  "$schema": "https://docs.renovatebot.com/renovate-schema.json",\n  "extends": ["github>karlhorky/renovate-config:default.json5"]\n}' > renovate.json
pnpm add --save-dev @crxjs/vite-plugin@beta
# Add changes to vite.config.ts https://crxjs.dev/vite-plugin/getting-started/react/create-project#update-the-vite-config
touch manifest.json # And add changes to manifest.json https://crxjs.dev/vite-plugin/getting-started/react/create-project#update-the-vite-config
yq --inplace --output-format=json \
  '.compilerOptions.resolveJsonModule = true' \
  tsconfig.node.json
yq --inplace --output-format=json \
  '.include = .include + ["manifest.json"]' \
  tsconfig.node.json
yq --inplace --output-format=json \
  '.compilerOptions.moduleResolution = "Node16"' \
  tsconfig.json # And add .js to the App import in src/main.tsx
yq --inplace --output-format=json \
  '.compilerOptions.moduleResolution = "Node16"' \
  tsconfig.node.json
pnpm patch @vitejs/plugin-react --edit-dir ./node_modules/.patch
# Edit package.json and copy dist/index.d.ts to dist.d.mts https://github.com/vitejs/vite-plugin-react/issues/104#issuecomment-1483879451
pnpm patch-commit ./node_modules/.patch
rm manifest.json
touch manifest.config.ts # And add content from here, keeping the action from manifest.json https://crxjs.dev/vite-plugin/concepts/manifest#typescript
# Add `assert { type: 'json' }` to manifest.config.ts
yq --inplace --output-format=json \
  '.include = .include + ["package.json"]' \
  tsconfig.node.json
```
