import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import Compression from 'vite-plugin-compression';

export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        '@/': resolve('src') + '/'
      }
    },
    plugins: [
      vue(),
      Compression({
        disable: command !== 'build',
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    },
    build: {
      target: 'chrome63',
      chunkSizeWarningLimit: 2000
    }
  };
});
