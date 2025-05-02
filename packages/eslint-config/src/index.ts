import type {Config, ConfigWithExtendsArray} from '@eslint/config-helpers';
import { defineConfig, globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import json from "@eslint/json";
// import markdown from "@eslint/markdown";

type Params = Readonly<{
    browserPaths?: Config['files'],
}>;

const createConfig = (_params: Params = {}) => defineConfig([
    eslint.configs.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    {
      // commonjs files only
      files: ["**/*.cjs"],
      languageOptions: {
        globals: {
          ...globals.node,
        },
        sourceType: "commonjs",
      },
    },
    {
        files: ["**/*.json?(c|5)"],
        plugins: {
            json
        },
        language: "json/json",
        rules: {
            "json/no-duplicate-keys": "error",
        },
    },
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
    globalIgnores([
      "**/node_modules/",
      "package-lock.json",
      "package.json",
    ]),
].filter(Boolean) as ConfigWithExtendsArray);

export default createConfig();

