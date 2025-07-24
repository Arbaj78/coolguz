import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ root-relative because you're using a custom domain (not repo name)
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  assetsInclude: ['**/*.mp4'],
});
