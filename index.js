module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'import', 'prettier'],
  extends: ['react-app'],
  rules: {
    'prettier/prettier': [
      'warn',
      {trailingComma: 'es5', singleQuote: true, printWidth: 100},
    ],
    'no-use-before-define': 0,
  },
};
