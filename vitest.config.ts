import { defineConfig, configDefaults } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteRequire } from "vite-require";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// todo, change this to require.resolve
const tsConfigPath = "./tsconfig.json";

export default defineConfig({
  test: {
    exclude: ["packages/*/dist/**", ...configDefaults.exclude],
    include: ["**/*.test.{ts,tsx}"],
    globals: false,

    reporters: ["verbose"],
    typecheck: {
      ...configDefaults.typecheck,
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

  plugins: [viteRequire(), tsconfigPaths({ projects: [tsConfigPath] })],
});
