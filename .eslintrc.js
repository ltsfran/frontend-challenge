module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'next/core-web-vitals'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@next/next/no-img-element': 'off'
  }
}
