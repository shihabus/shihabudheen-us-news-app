module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb',"prettier", "prettier/react"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/prefer-default-export":0,
    "import/no-named-as-default-member":0,
    "import/no-named-as-default":0
  },
};
