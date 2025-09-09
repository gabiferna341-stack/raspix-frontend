import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 garante que os assets funcionem em produção no Render
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
