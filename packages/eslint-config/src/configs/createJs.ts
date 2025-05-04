import type { ConfigWithExtends as Config } from "@eslint/config-helpers";
import nativeRules from "./helpers/nativeRules";

type Params = Record<never, never>;

const createConfig = (_params: Params): Config => ({
  files: ["**/*.{js,jsx,mjs}"],
  rules: {
    ...nativeRules,
  },
});

export default createConfig;
