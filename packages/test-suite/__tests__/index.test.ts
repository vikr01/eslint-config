import mainConfig from '../../eslint-config/src/index';
import lint from './helpers/lint';

describe('config', () => {
  it('main', async () => {
    const report = await lint(mainConfig);
    expect(report).toMatchSnapshot();
  });
});
