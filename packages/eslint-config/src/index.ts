import type { ConfigWithExtendsArray } from "@eslint/config-helpers";
import { defineConfig } from "eslint/config";
import js from "./configs/js";
import ts from "./configs/ts";
import cjs from "./configs/cjs";
import ignores from "./configs/ignores";
import createTs from "./configs/createTs";
import json from "./configs/json";
// import md from './md';

type Params = Readonly<
  {
    // browserPaths?: Config['files'];
  } & Parameters<typeof createTs>[0]
>;

export const createConfig = ({
  tsConfigPath,
}: Params): ConfigWithExtendsArray =>
  defineConfig(
    js,
    ts,
    createTs({ tsConfigPath }),
    cjs,
    // md,
    json,
    ignores,
  );

const defaultValue: Params = {
  tsConfigPath: undefined,
};

export const defaultConfig = createConfig(defaultValue);
