import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon.svg'],
      manifest: {
        name: 'Denzi PWA - Contoh',
        short_name: 'DenziPWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2b6cb0',
        icons: [
          { src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        runtimeCaching: [
          {
            urlPattern: /\/.*$/,
            handler: 'NetworkFirst',
            options: { cacheName: 'html-cache' }
          }
        ]
      }
    })
  ]
})
