import type { ConfigWithExtends as Config } from '@eslint/config-helpers';
import jsonPlugin from '@eslint/json';

const config: Config = {
  files: ['**/*.json?(c|5)'],
  plugins: {
    json: jsonPlugin,
  },
  language: 'json/jsonc',
  extends: [jsonPlugin.configs.recommended],
};

export default config;
