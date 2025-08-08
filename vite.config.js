import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pour un déploiement à la racine du domaine (user/organization page)
  base: '/',
})