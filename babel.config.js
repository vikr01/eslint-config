'use strict';

const { workspaces = [] } = require('./package.json');

module.exports = api => {
  const isProdEnv = api.env('production');

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
  };
};
