import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg?react' }), tsConfigPaths()],
  resolve: {
    alias: {
      shared: '/src/shared',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "shared/styles/global" as *;`,
      },
    },
  },
});
