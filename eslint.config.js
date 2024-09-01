module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // if you're using React
    'plugin:@typescript-eslint/recommended', // if you're using TypeScript
  ],
  parser: '@typescript-eslint/parser', // if you're using TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', // if you're using React
    '@typescript-eslint', // if you're using TypeScript
  ],
  rules: {
    // Add your custom rules here
  },
};
