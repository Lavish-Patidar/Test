import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://test-7a5h.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
});