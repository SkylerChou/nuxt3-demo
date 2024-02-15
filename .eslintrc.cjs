module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxt/eslint-config', '@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['components', './components']],
        extensions: ['.js', '.vue']
      }
    },
    // 告訴 ESLint 這些套件是安裝在 devDependencies
    'import/core-modules': ['pinia', 'dayjs', 'v-calendar', 'v-calendar/style.css']
  },
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error',
    'max-len': [0], // warn, maximum length of 80, tab width 4  max-len: [1, 80, 4]
    'import/prefer-default-export': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Btn', 'Home', 'Footer', 'Header', 'index', 'a', 'b']
      }
    ]
  }
};
