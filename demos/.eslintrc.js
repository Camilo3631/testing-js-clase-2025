module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'max-len': 'off',
    'no-unused-vars': 'warn',
  },
};
