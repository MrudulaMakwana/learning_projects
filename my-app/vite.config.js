import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';   // 👈 keeps JSX compile happy
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),                          // 👈 Tailwind’s Vite plugin
  ],
});
