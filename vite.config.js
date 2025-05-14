import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CodeMinds-RutaKids-LandingPage/',
  plugins: [react()],
})
