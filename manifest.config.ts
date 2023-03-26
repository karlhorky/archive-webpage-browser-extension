import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json' assert { type: 'json' };

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = packageJson.version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/);

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name: 'CRXJS React Vite Example',
  action: {
    default_popup: 'index.html',
  },
  // up to four numbers separated by dots
  version: `${major}.${minor}.${patch}.${label}`,
  // semver is OK in "version_name"
  version_name: packageJson.version,
}));
