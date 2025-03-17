import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// Recrear __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
  // Añade esta sección para manejar el enrutamiento del lado del cliente
  server: {
    historyApiFallback: true,
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
