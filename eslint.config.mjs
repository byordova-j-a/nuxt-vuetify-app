// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import pluginVue from 'eslint-plugin-vue';
import stylisticJs from '@stylistic/eslint-plugin-js';
export default withNuxt(
  [ ...pluginVue.configs['flat/recommended'],
    {
      plugins: {
        '@stylistic/js': stylisticJs,
      },
      rules: {
        '@stylistic/js/space-infix-ops': ['error', { 'int32Hint': false }],
        '@stylistic/js/indent': ['error', 2],
        '@stylistic/js/no-trailing-spaces': 'error',
        quotes: ['error', 'single'],
        // Vue 3 specific rules
        'vue/multi-word-component-names': 'off',

        // Base ESLint rules
        semi: ['error', 'always'],
        curly: ['error', 'all'],
        'comma-dangle': ['error', 'always-multiline'],
        'newline-after-var': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'max-len': [
          'error',
          {
            code: 150,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreRegExpLiterals: true,
            tabWidth: 2,
            ignorePattern: '^import\\W.*',
          },
        ],
        'no-multi-spaces': 'error',
        'no-irregular-whitespace': 'error',
        'spaced-comment': 'error',
        'space-unary-ops': 'error',
        'space-in-parens': 'error',
        'newline-before-return': 'error',
        'space-before-function-paren': 'off',
        'import/order': 'off',
      },
    }],
);
