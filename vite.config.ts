import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Dev server (local)
  server: {
    host: true,
    port: process.env.PORT || 5173,
    allowedHosts: true
  },

  // ✅ REQUIRED for Render preview
  preview: {
    host: true,
    port: process.env.PORT || 4173,

    // 🔥 THIS FIXES YOUR ERROR
    allowedHosts: [
      '.onrender.com' // allow all Render subdomains
    ]
  }
})
