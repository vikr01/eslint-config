import { describe, it, expect } from "vitest";
import { createConfig } from "@vikr01/eslint-config";
import lint from "./helpers/lint";

const mainConfig = createConfig({
  typescript: true,
  tsConfigPath: undefined,
  json: true,
});

describe("config", () => {
  it("main", async () => {
    const report = await lint(mainConfig);
    expect(report).toMatchSnapshot();
  });
});
