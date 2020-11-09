module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'standard',
    'eslint:recommended',
    'prettier',
    'react-app',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-anonymous-default-export': 0,
    'no-console': 1,
    'no-extra-bind': 0,
    'simple-import-sort/sort': 'error',
  },
}
