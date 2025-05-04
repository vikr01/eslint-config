import type { Config } from "@eslint/config-helpers";
import { node as nodeGlobals } from "globals";

const config: Config = {
  // commonjs files only
  files: ["**/*.cjs"],
  languageOptions: {
    globals: {
      ...nodeGlobals,
    },
    sourceType: "commonjs",
  },
};

export default config;
