// @flow
import mainConfig from '@vikr01/eslint-config/src';
import lint from './helpers/lint';

describe('config', () => {
  it('main', () => {
    const report = lint(mainConfig);
    expect(report).toMatchSnapshot();
  });
});
