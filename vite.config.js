import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // change to '/hfp-innovations/' if deploying under a GitHub repo
});

