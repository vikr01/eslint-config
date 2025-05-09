/* eslint-disable @typescript-eslint/no-require-imports */
import type { ConfigWithExtends as Config } from "@eslint/config-helpers";
import { browser as browserGlobals } from "globals";
import type * as reactConfigType from "./react";

type Params = Readonly<{
  files: Config["files"];
  react?: boolean;
}>;

const createConfig = ({ files, react = false }: Params): Config => {
  const reactConfig =
    react && (require("./react") as typeof reactConfigType).default;

  return {
    files,
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...browserGlobals,
      },
    },
    extends: [reactConfig].filter(
      Boolean as unknown as <T>(x: T) => x is NonNullable<Exclude<T, false>>,
    ),
  };
};

export default createConfig;
