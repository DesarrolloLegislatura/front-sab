import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite que Vite escuche en todas las interfaces
    port: 5173,
    watch: {
      usePolling: true, // Soluciona problemas de hot reload en sistemas de archivos compartidos
    },
  }
})
