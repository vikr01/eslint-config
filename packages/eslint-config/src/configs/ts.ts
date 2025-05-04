import type { ConfigWithExtendsArray } from "@eslint/config-helpers";
import {
  config as tsEslintConfigBuilder,
  configs as tsEslintConfigs,
  type ConfigWithExtends as TsEslintConfigWithExtends,
} from "typescript-eslint";
import js from "./js";

const config = tsEslintConfigBuilder(
  { ...js, files: ["**/*.{ts,tsx}"] } as TsEslintConfigWithExtends,
  tsEslintConfigs.recommended,
) as ConfigWithExtendsArray;

export default config;
