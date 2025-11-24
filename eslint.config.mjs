import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'object-shorthand': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: false,
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
  prettier, // ESLintとPrettierのルール競合を回避
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'public/**',
    'node_modules/**',
    'next-env.d.ts',
    '*.config.js',
    '*.config.mjs',
  ]),
])

export default eslintConfig
