module.exports = {
  root: true,
  extends: ['@react-native', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        arrowParens: 'avoid',
        printWidth: 120,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        endOfLine: 'auto',
      },
    ],
  },
};
