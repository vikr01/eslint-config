"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const src_1 = __importDefault(require("@vikr01/eslint-config/src"));
const lint_1 = __importDefault(require("./helpers/lint"));
describe('config', () => {
    it('main', () => {
        const report = (0, lint_1.default)(src_1.default);
        expect(report).toMatchSnapshot();
    });
});
