import type { Config, ConfigWithExtendsArray } from "@eslint/config-helpers";
import { defineConfig } from "eslint/config";
import { configs as eslintConfigs } from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import {
  config as tsEslintConfigBuilder,
  configs as tsEslintConfigs,
} from "typescript-eslint";
import cjs from "./cjs";
import ignores from "./ignores";
import createTs from "./createTs";
// import json from './json';
// import md from './md';

type Params = Readonly<
  {
    // browserPaths?: Config['files'];
  } & Parameters<typeof createTs>[0]
>;

export const createConfig = ({ tsConfigPath }: Params): Config[] =>
  defineConfig(
    tsEslintConfigBuilder(
      eslintConfigs.recommended,
      tsEslintConfigs.recommended,
      eslintConfigPrettier,
      eslintPluginPrettierRecommended,
      createTs({ tsConfigPath }),
      cjs,
      // md,
      // json,
      ignores,
    ) as ConfigWithExtendsArray,
  );

const defaultValue: Params = {
  tsConfigPath: undefined,
};

export const defaultConfig = createConfig(defaultValue);
