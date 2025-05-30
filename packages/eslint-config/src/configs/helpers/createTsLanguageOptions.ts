import type { Linter } from "eslint";
import { basename, dirname } from "path";

type Options = {
  tsConfigPath: string | undefined | null;
};

export default function createTsLanguageOptions({
  tsConfigPath,
}: Options): Linter.LanguageOptions {
  return {
    parserOptions: createTsParserOptions({ tsConfigPath }),
  };
}

type CreateParserOptions = {
  tsConfigPath: Options["tsConfigPath"];
};

export function createTsParserOptions({
  tsConfigPath,
}: CreateParserOptions): Linter.ParserOptions {
  const project = tsConfigPath != null ? basename(tsConfigPath) : undefined;
  const tsconfigRootDir =
    tsConfigPath != null ? dirname(tsConfigPath) : undefined;

  return {
    project,
    tsconfigRootDir,
  };
}
