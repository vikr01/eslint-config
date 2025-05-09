/* eslint-disable @typescript-eslint/no-require-imports */
import type { MergeDeep } from "type-fest";

import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import createJs from "./configs/createJs";
import cjs from "./configs/cjs";
import ignores from "./configs/ignores";
import type * as createTs from "./configs/createTs";
import type * as jsonConfig from "./configs/json";
// import md from './md';

type TypescriptParams =
  | {
      typescript: true;
      tsConfigPath: Parameters<typeof createTs.default>[0]["tsConfigPath"];
    }
  | {
      typescript: false;
    };

type OtherParams = {
  enableIgnores?: false;

  // TODO: support jsConfigPath
  jsConfigPath?: string;

  json?: boolean;
};

type Params = Readonly<MergeDeep<TypescriptParams, OtherParams>>;

export const createConfig = (
  params: Params,
): ReturnType<typeof defineConfig> => {
  const { enableIgnores = true, json: lintJson = false, typescript } = params;
  const jsConfig = createJs({});

  const configs = [
    jsConfig,
    typescript &&
      (require("./configs/createTs") as typeof createTs).default({
        jsConfig,
        tsConfigPath: params.tsConfigPath,
      }),
    cjs,
    // md,
    lintJson && (require("./configs/json") as typeof jsonConfig).default,
    enableIgnores && ignores,
    eslintPluginPrettierRecommended,
  ].filter(
    Boolean as unknown as <T>(x: T) => x is NonNullable<Exclude<T, false>>,
  );

  return defineConfig(...configs);
};
