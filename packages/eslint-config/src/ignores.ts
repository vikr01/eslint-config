import type { Config } from "@eslint/config-helpers";
import { globalIgnores } from "eslint/config";

const ignores: Config = globalIgnores([
  "**/node_modules/",
  "package-lock.json",
  "package.json",
]);

export default ignores;
