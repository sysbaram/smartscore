import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015',
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        format: 'iife',
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
      },
      external: ['react', 'react-dom']
    },
  },
})
