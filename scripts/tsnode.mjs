import { createRequire } from "module";
import { dirname } from "path";
import { register as registerTsNode } from "ts-node";
import { register as registerPaths } from "tsconfig-paths";
import * as ts from "typescript";
const require = createRequire(import.meta.url);
const tsConfigPath = require.resolve("../tsconfig.json");
const { options: compilerOptions } = getMergedTsConfig(tsConfigPath);
const { baseUrl, paths } = compilerOptions;

registerPaths({
  baseUrl,
  paths,
});

registerTsNode({
  emit: false,
  transpileOnly: false,
  project: tsConfigPath,
  compilerOptions: {
    module: "CommonJS",
    moduleResolution: "Node",
  },
});

function getMergedTsConfig(tsconfigPath) {
  const { config } = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  return ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    dirname(tsconfigPath),
    {},
    tsconfigPath,
  );
}
