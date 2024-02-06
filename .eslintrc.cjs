module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['components', './components']],
        extensions: ['.js', '.vue'],
      },
    },
    // 告訴 ESLint 這些套件是安裝在 devDependencies
    'import/core-modules': [
      'pinia',
      'dayjs',
      'v-calendar',
      'v-calendar/style.css',
    ],
  },
  rules: {
    'no-undef': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'warn',
    'max-len': [0], // warn, maximum length of 80, tab width 4  max-len: [1, 80, 4]
    'no-plusplus': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
  },
};
