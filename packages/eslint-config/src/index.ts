import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import createJs from "./configs/createJs";
import cjs from "./configs/cjs";
import ignores from "./configs/ignores";
import createTs from "./configs/createTs";
import json from "./configs/json";
// import md from './md';

type Params = Readonly<{
  tsConfigPath: Parameters<typeof createTs>[0]["tsConfigPath"];
}>;

export const createConfig = ({
  tsConfigPath,
}: Params): ReturnType<typeof defineConfig> => {
  const jsConfig = createJs({});

  return defineConfig(
    jsConfig,
    createTs({ jsConfig, tsConfigPath }),
    cjs,
    // md,
    json,
    ignores,
    eslintPluginPrettierRecommended,
  );
};

const defaultValue: Params = {
  tsConfigPath: undefined,
};

export const defaultConfig = createConfig(defaultValue);
