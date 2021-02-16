module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-continue': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'warn',
    'react/no-array-index-key': 'off',
  },
};
