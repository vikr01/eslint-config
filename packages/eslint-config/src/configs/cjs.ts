import type { Config } from "@eslint/config-helpers";
import { node as nodeGlobals } from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const tsRulesOff: Record<keyof typeof tsPlugin.rules, "off"> =
  Object.fromEntries(
    Object.keys(tsPlugin.rules).map((ruleName) => [
      `@typescript-eslint/${ruleName}`,
      "off",
    ]),
  );

const config: Config = {
  // commonjs files only
  files: ["**/*.cjs"],
  languageOptions: {
    globals: {
      ...nodeGlobals,
    },
    sourceType: "commonjs",
  },
  rules: {
    ...tsRulesOff,
  },
};

export default config;
