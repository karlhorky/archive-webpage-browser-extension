import upleveled from 'eslint-config-upleveled';
import globals from 'globals';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
const config = [
  {
    ignores: ['dist/**/*'],
  },
  ...upleveled,
  {
    languageOptions: {
      globals: {
        ...globals.webextensions,
      },
    },
  },
  {
    files: ['vite.config.ts'],
    rules: {
      'import-x/no-unresolved': [
        'error',
        { ignore: ['^@crxjs/vite-plugin$'] },
      ],
    },
  },
];

export default config;
