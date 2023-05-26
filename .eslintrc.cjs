/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
  extends: ['upleveled'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  env: {
    webextension: true,
  },
};

module.exports = config;
