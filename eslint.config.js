import upleveled from 'eslint-config-upleveled';
import globals from 'globals';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
const config = [
  ...upleveled,
  {
    ignores: ['dist/**/*'],
    languageOptions: {
      parserOptions: {
        EXPERIMENTAL_useProjectService: true,
        project: './tsconfig.json',
      },
      globals: {
        ...globals.webextensions,
      },
    },
  },
];

export default config;
