import { defineConfig, globalIgnores } from "eslint/config";
import "./scripts/tsnode.mjs";

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { createConfig } = require("@vikr01/eslint-config");

const tsConfigPath = require.resolve("./tsconfig.json");

export default defineConfig(
  createConfig({ tsConfigPath }),
  globalIgnores(["packages/*/dist"]),
);
