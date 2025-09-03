/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    rules: {
      'import/no-unresolved': 'off',
      'no-trailing-spaces': 'off',
      'eol-last': 'off',
      'max-len': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'off',
      'semi': 'off',
      'padded-blocks': 'off',
      'indent': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
}
