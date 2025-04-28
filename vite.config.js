import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // This will fix the 404 issue
    historyApiFallback: true,
  },
  base: "/Movie-Database"
})
