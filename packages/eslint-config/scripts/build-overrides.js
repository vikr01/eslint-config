'use strict';

const { writeFileSync } = require('fs');
const { promisify } = require('util');
const path = require('path');
const rimrafCallback = require('rimraf');
const prettier = require('prettier');
/* eslint-disable-next-line import/no-unresolved */
const overrides = require('../dist/overrides');

const pathToOverridesJs = path.join(__dirname, '../dist/overrides');
const pathToOverridesJson = path.join(__dirname, '../dist/overrides.json');

const rimraf = promisify(rimrafCallback);
const overridesJson = prettier.format(
  JSON.stringify({
    ...overrides,
    /* eslint-disable-next-line no-underscore-dangle */
    __esModule: overrides.__esModule,
  }),
  {
    parser: 'json',
  }
);

rimraf(pathToOverridesJs).then(() => {
  writeFileSync(pathToOverridesJson, overridesJson, 'utf-8');
});
