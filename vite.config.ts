import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { fileURLToPath } from 'url'

// Recrear __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr() // Añadir el plugin SVGR
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
  // Configuración del servidor para manejar SPA routing
  server: {
    // For SPA routing, use the following instead of middlewareMode
    fs: {
      strict: true,
    },
  },
  // Esto asegura un enrutamiento adecuado en la compilación de producción
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
