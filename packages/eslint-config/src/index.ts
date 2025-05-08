import type { MergeDeep } from "type-fest";

import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import createJs from "./configs/createJs";
import cjs from "./configs/cjs";
import ignores from "./configs/ignores";
import createTs from "./configs/createTs";
import jsonConfig from "./configs/json";
// import md from './md';

type TypescriptParams =
  | {
      typescript: true;
      tsConfigPath: Parameters<typeof createTs>[0]["tsConfigPath"];
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
  const { enableIgnores = true, json: lintJson = true, typescript } = params;
  const jsConfig = createJs({});

  const configs = [
    jsConfig,
    typescript && createTs({ jsConfig, tsConfigPath: params.tsConfigPath }),
    cjs,
    // md,
    lintJson && jsonConfig,
    enableIgnores && ignores,
    eslintPluginPrettierRecommended,
  ].filter(
    Boolean as unknown as <T>(x: T) => x is NonNullable<Exclude<T, false>>,
  );

  return defineConfig(...configs);
};

const defaultValue: Params = {
  typescript: true,
  tsConfigPath: undefined,
};

export const defaultConfig = createConfig(defaultValue);
