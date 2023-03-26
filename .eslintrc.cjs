/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
  extends: ['@upleveled/upleveled'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
};

module.exports = config;
