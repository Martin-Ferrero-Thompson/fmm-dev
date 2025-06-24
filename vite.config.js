// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  const repoName = 'fmm-dev'; // <<<< YOUR REPOSITORY NAME HERE

  if (command === 'build') {
    if (mode === 'test_deploy') {
      return {
        base: `/${repoName}/test/`,
        build: {
          outDir: 'dist-test', // Output to a different directory for clarity
        }
      };
    } else { // Default build (production)
      return {
        base: `/${repoName}/`,
        build: {
          outDir: 'dist-prod', // Output to a different directory
        }
      };
    }
  }
  // For 'serve' (npm run dev) or other commands, use default config (base: '/')
  return {
    // development server specific config if any
  };
});