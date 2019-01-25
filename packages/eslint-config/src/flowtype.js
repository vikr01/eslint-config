// @flow
import type { RuleDictionary } from './types';

const rules: RuleDictionary = {
  'flowtype/boolean-style': ['error', 'boolean'],
  'flowtype/define-flow-type': 'warn',
  'flowtype/delimiter-dangle': ['error', 'always-multiline'],
  'flowtype/generic-spacing': ['error', 'never'],
  'flowtype/newline-after-flow-annotation': ['error', 'never'],
  'flowtype/no-dupe-keys': 'error',
  'flowtype/no-primitive-constructor-types': 'error',
  'flowtype/no-types-missing-file-annotation': 'error',
  'flowtype/no-weak-types': 'warn',
  'flowtype/object-type-delimiter': ['error', 'comma'],
  'flowtype/semi': ['error', 'always'],
  'flowtype/space-after-type-colon': ['error', 'always'],
  'flowtype/space-before-generic-bracket': ['error', 'never'],
  'flowtype/space-before-type-colon': ['error', 'never'],
  'flowtype/type-id-match': ['error', '^[A-Z].*'],
  'flowtype/type-import-style': ['error', 'identifier'],
  'flowtype/union-intersection-spacing': ['error', 'always'],
  'flowtype/use-flow-type': 'error',
};

export default rules;
