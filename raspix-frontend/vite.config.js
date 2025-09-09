import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Porta padrão, mas pode alterar se precisar
    open: true  // Abre automaticamente no navegador ao rodar `npm run dev`
  },
  resolve: {
    alias: {
      '@': '/src', // Facilita importações: você pode usar "@/components"
    },
  },
})
