import { defineConfig } from 'vitest/config';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default defineConfig({
  test: {
    deps: {
      moduleDirectories: ['node_modules'],
    },
    exclude: ['**/node_modules/**', 'packages/*/dist/**'],
    include: ['**/*.test.{ts,tsx}'],
    globals: false,

    reporters: ['verbose'],
    typecheck: {
      tsconfig: require.resolve('./tsconfig.json'),
    },

    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage/',
      reporter: ['text', 'lcov'],

      include: ['packages/*/src/**/*.{ts,tsx}'],

      exclude: [
        '**/.*',
        '**/.*/**',
        '**/*.config.{js,ts}',
        'packages/*/dist/**',
        'scripts/**',
        'coverage/**',
      ],
    },

    restoreMocks: true,
    clearMocks: true,
    mockReset: true,
    watch: false,
  },
});
