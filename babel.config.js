'use strict';

const testPlugins = [
  require('@babel/plugin-syntax-dynamic-import'),
  require('@babel/plugin-syntax-jsx'),
  require('@babel/plugin-proposal-class-properties'),
  [require('@babel/plugin-proposal-decorators'), { legacy: true }],
];
const { workspaces = [] } = require('./package.json');

module.exports = api => {
  const isProdEnv = api.env('production');
  const isTestEnv = api.env('test');

  const targets = {};
  if (isProdEnv) {
    targets.node = 6;
  }

  return {
    babelrcRoots: workspaces.packages || workspaces,
    presets: [
      [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'usage',
          targets,
        },
      ],
      require('@babel/preset-flow'),
    ],
    plugins: [...(!isTestEnv ? [] : testPlugins)],
  };
};
