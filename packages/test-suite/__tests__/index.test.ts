import { describe, it, expect } from "vitest";
import { defaultConfig as mainConfig } from "@vikr01/eslint-config";
import lint from "./helpers/lint";

describe("config", () => {
  it("main", async () => {
    const report = await lint(mainConfig);
    expect(report).toMatchSnapshot();
  });
});
