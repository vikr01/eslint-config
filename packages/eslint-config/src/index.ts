import type { Config, ConfigWithExtendsArray } from '@eslint/config-helpers';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
// import json from "@eslint/json";
// import markdown from "@eslint/markdown";

const tsConfigPath = require.resolve('../../../tsconfig.json');

type Params = Readonly<{
  browserPaths?: Config['files'];
}>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createConfig = (_params: Params = {}) =>
  defineConfig(
    tseslint.config(
      eslint.configs.recommended,
      tseslint.configs.recommended,
      eslintConfigPrettier,
      eslintPluginPrettierRecommended,
      {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
          parserOptions: {
            project: [tsConfigPath],
          },
        },
      },
      {
        // commonjs files only
        files: ['**/*.cjs'],
        languageOptions: {
          globals: {
            ...globals.node,
          },
          sourceType: 'commonjs',
        },
      },
      // {
      //     files: ["tsconfig.json?(c|5)"],
      //     plugins: {
      //         json
      //     },
      //     language: 'json/jsonc',
      //     extends: [json.configs.recommended]
      // },
      // {
      //     files: ["**/*.md"],
      //     plugins: {
      //         markdown
      //     },
      //     language: "markdown/commonmark",
      //     rules: {
      //         "markdown/no-html": "error"
      //     }
      // },
      // {
      //   files: [eslintConfigFilePath],
      //   languageOptions: {
      //     globals: {
      //       ...globals.node,
      //     },
      //   },
      // },
      globalIgnores(['**/node_modules/', 'package-lock.json', 'package.json'])
    ) as ConfigWithExtendsArray
  );

export default createConfig();
