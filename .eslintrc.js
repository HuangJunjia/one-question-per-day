module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'consistent-return': [0],
    'prefer-destructuring': [0],
    'no-bitwise': [0],
    'no-plusplus': [0],
    'no-unused-expressions': [1],
  },
};
