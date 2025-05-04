import type { ConfigWithExtends as Config } from "@eslint/config-helpers";
import jsonPlugin from "@eslint/json";

const config: Config = {
  files: ["tsconfig.json?(c|5)"],
  plugins: {
    json: jsonPlugin,
  },
  language: "json/jsonc",
  languageOptions: {
    allowTrailingCommas: true,
  },
  extends: [jsonPlugin.configs.recommended],
};

export default config;
