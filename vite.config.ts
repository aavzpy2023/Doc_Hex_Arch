// --- ./vite.config.ts ---
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Escuchar en todas las IPs (0.0.0.0) - CRÍTICO para Docker
    port: 5173,       // Forzar puerto 5173 - CRÍTICO para coincidir con Docker
    strictPort: true, // Si el 5173 está ocupado, fallar en vez de cambiar al 3000
    watch: {
      usePolling: true // Necesario para Docker en algunos sistemas
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false
  }
})