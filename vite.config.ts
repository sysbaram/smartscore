import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-module-type',
      generateBundle(options, bundle) {
        for (const fileName in bundle) {
          if (fileName.endsWith('.html')) {
            const htmlBundle = bundle[fileName] as any;
            htmlBundle.source = htmlBundle.source.replace(
              '<script type="module" crossorigin',
              '<script'
            );
          }
        }
      },
    },
  ],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: 'iife',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
