import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Si tu repo se llama p.ej. "mariano-portfolio", usá esa carpeta:
  base: '/mariano-portfolio/'
})

