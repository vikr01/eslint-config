// @flow
import { ESLint } from "eslint";
import * as path from "path";

const pathToTestSuite = path.join(__dirname, "../..");

export default async (
  config: ESLint.Options["baseConfig"],
): Promise<Array<ESLint.LintResult>> => {
  const cli = new ESLint({
    baseConfig: config,
    cwd: pathToTestSuite,
    fix: true,
  });

  const results = await cli.lintFiles([pathToTestSuite]);

  const presanitizedResults = [...results];

  /* eslint no-param-reassign: 0 */
  presanitizedResults.forEach((result: ESLint.LintResult) => {
    const { filePath, source } = result;

    if (filePath) {
      result.filePath = path.relative(pathToTestSuite, filePath);
    }

    if (source) {
      delete result.source;
    }
  });

  return presanitizedResults;
};
