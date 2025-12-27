import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // Required plugins
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // ✅ REQUIRED for Render deployment
  server: {
    host: true,                    // binds to 0.0.0.0
    port: process.env.PORT || 5173 // uses Render's port
  },

  // ✅ Needed for preview mode on Render
  preview: {
    host: true,
    port: process.env.PORT || 4173
  }
})
