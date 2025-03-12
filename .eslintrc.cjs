module.exports = {
  parser: '@typescript-eslint/parser',
  globals: {
      "google": "readonly",
      "CanvasJS": "readonly"
  },
  extends: [
    'eslint:recommended',
    'plugin:svelte/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    browser: true
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    "svelte/no-unused-svelte-ignore": "off",
    "svelte/valid-compile": "off", // Disable valid compile check as we use svelte-check separately
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "args": "none"}],
    "no-unused-vars": "off",
    "no-explicit-any": "off",
    "prefer-const": "off",
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: ['node_modules', '.eslintrc.cjs', 'svelte.config.js', 'vite.config.js', 'static']
}