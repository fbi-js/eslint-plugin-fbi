module.exports = {
  extends: [require.resolve('./base'), 'prettier/react', 'react-app'],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': [
      1,
      {
        additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
