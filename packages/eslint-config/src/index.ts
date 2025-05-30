/* eslint-disable @typescript-eslint/no-require-imports */

import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import createJs from "./configs/createJs";
import createCjs from "./configs/createCjs";
import ignores from "./configs/ignores";
import type * as createTsModule from "./configs/createTs";
import type * as jsonConfig from "./configs/json";
import type * as createBrowserType from "./configs/createBrowser";
import type { Params } from "./types";
// import md from './md';

export const createConfig = (
  params: Params,
): ReturnType<typeof defineConfig> => {
  const {
    browser = null,
    enableIgnores = true,
    json: lintJson = false,
    typescript,
  } = params;
  const jsConfig = createJs({});

  let tsConfigPath;
  if (typescript === true) {
    tsConfigPath = params.tsConfigPath;
  }

  const configs = [
    jsConfig,
    typescript === true &&
      (require("./configs/createTs") as typeof createTsModule).default({
        jsConfig,
        tsConfigPath,
      }),
    browser != null &&
      (require("./configs/createBrowser") as typeof createBrowserType).default(
        browser,
      ),
    createCjs({ jsConfig, tsConfigPath }),
    // md,
    lintJson === true &&
      (require("./configs/json") as typeof jsonConfig).default,
    enableIgnores && ignores,
    eslintPluginPrettierRecommended,
  ].filter(
    Boolean as unknown as <T>(x: T) => x is NonNullable<Exclude<T, false>>,
  );

  return defineConfig(...configs);
};
