import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      'bun:sqlite': path.resolve('./src/sqlite-test-shim.ts'),
    },
  },
  test: {
    include: ['src/**/*.test.ts', 'setup/**/*.test.ts'],
  },
});
