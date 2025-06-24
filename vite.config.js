// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  let base = '/';
  let outDir = 'dist';

  if (mode === 'test') {
    base = '/fmm-dev/test/';
    outDir = 'dist-test';
  } else if (mode === 'production') {
    base = '/fmm-dev/';
    outDir = 'dist-prod';
  }

  return {
    base,
    build: {
      outDir,
      emptyOutDir: true,
    },
  };
});