import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// todo, change this to require.resolve
const tsConfigPath = "./tsconfig.json";

export default defineConfig({
  test: {
    deps: {
      moduleDirectories: ["node_modules"],
    },
    exclude: ["**/node_modules/**", "packages/*/dist/**"],
    include: ["**/*.test.{ts,tsx}"],
    globals: false,

    reporters: ["verbose"],
    typecheck: {
      tsconfig: tsConfigPath,
    },

    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage/",
      reporter: ["text", "lcov"],

      include: ["packages/*/src/**/*.{ts,tsx}"],

      exclude: [
        "**/.*",
        "**/.*/**",
        "**/*.config.{js,ts}",
        "packages/*/dist/**",
        "scripts/**",
        "coverage/**",
      ],
    },

    restoreMocks: true,
    clearMocks: true,
    mockReset: true,
    watch: false,
  },

  plugins: [tsconfigPaths({ projects: [tsConfigPath] })],
});
