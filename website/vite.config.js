import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Tell Vite to explicitly treat spreadsheet files as static assets
  assetsInclude: ["**/*.xlsx"],
});
