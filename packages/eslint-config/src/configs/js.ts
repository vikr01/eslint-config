import type { ConfigWithExtends as Config } from "@eslint/config-helpers";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

const config: Config = {
  files: ["**/*.{js,jsx,mjs}"],
  extends: [eslintPluginPrettierRecommended],
};

export default config;
