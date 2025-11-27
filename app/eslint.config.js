import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import pluginPrettier from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  pluginPrettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
])

// import js from '@eslint/js'
// import globals from 'globals'
// import tseslint from 'typescript-eslint'
// import pluginReact from 'eslint-plugin-react'
// import { defineConfig } from 'eslint/config'
// import pluginPrettier from 'eslint-plugin-prettier/recommended'
// import unusedImports from 'eslint-plugin-unused-imports'

// export default defineConfig([
//   {
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     plugins: { js, pluginReact, 'unused-imports': unusedImports },
//     extends: ['js/recommended'],
//   },
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: { globals: globals.browser },
//   },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   pluginPrettier,
//   {
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//       'react/jsx-uses-react': 'off',
//       'unused-imports/no-unused-imports': 'warn',
//     },
//   },
// ])
