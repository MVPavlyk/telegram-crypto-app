module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/modules/blockchain/contracts/*', 'src/modules/blockchain/hooks/useGameTon.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'linebreak-style': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};