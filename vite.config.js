import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ added for correct asset loading on GitHub Pages + custom domain
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
});
