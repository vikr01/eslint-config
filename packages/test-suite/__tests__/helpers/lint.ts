// @flow
import { CLIEngine } from 'eslint';
import * as path from 'path';

const pathToTestSuite = path.join(__dirname, '../..');

export default (config: Object): Array<Object> => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config,
    cwd: pathToTestSuite,
    extensions: ['js', 'jsx', 'md'],
    fix: true,
  });

  const report = cli.executeOnFiles([pathToTestSuite]);

  const presanitizedResults = [...report.results];

  /* eslint no-param-reassign: 0 */
  presanitizedResults.forEach((result: Object) => {
    const { messages, filePath, source } = result;

    if (filePath) {
      result.filePath = path.relative(pathToTestSuite, filePath);
    }

    if (source) {
      delete result.source;
    }

    if (messages) {
      presanitizedResults.push(...messages);
    }
  });
  return report;
};
