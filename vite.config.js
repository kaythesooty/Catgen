import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@dicts': path.resolve(__dirname, './client/dicts'),
      '@models': path.resolve(__dirname, './models'),
      '@pickers': path.resolve(__dirname, './client/components/pickers')
    }
  }
})
