import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...eslintConfigPrettier,
      ...prettierPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],
      'react/function-component-definition': [
        'warn',
        { namedComponents: 'arrow-function' },
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'max-len': ['warn', { code: 130 }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        { blankLine: 'always', prev: ['export'], next: '*' },
      ],
      'prefer-object-spread': 'error',
      'wrap-regex': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: false,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'max-lines': [
        'warn',
        {
          max: 250,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      'max-params': ['error', 3],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            [
              // libraries
              '^react',
              '^(@[a-zA-Z]).[!hooks]*',
              'formik',
              'dayjs',
              '^@vitejs',
              '^vite',
              'yup',
              'date-fns',
              'swiper/react',
              'swiper/modules',
              // components
              '^components/',
              '^shared/ui-kit/',
              '^shared/Form',
              '^(.|.{2})/[A-Z]*',
              // constants
              '^.*(constants).*$',
              '^constants/',
              // config
              '^.*(config).*$',
              // helpers
              '^.*(helpers).*$',
              '^helpers',
              '^helpers/',
              '^.*(lib).*$',
              // hooks
              '^hooks/',
              '^.*\\/hooks\\/',
              // static
              '^.*(assets).*$',
              // store
              '^.*(store).*$',
              '^store/',
              // styles
              '^.+.?(css|scss)$',
              // types
              '^.*(types).*$',
            ],
          ],
        },
      ],
    },
  },
);
