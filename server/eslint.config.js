module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        global: 'readonly',
        path: 'readonly',
        spawn: 'readonly',
        networkBaseUrl: 'writable',
      },
    },
    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
