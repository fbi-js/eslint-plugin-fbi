module.exports = {
  extends: [require.resolve('./base')],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 0-off 1-warning 2-error
    'no-console': 0
  }
}
