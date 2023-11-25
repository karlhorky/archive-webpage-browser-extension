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
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      globals: {
        ...globals.webextensions,
      },
    },
  },
];

export default config;
