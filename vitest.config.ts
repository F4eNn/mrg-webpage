import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './__tests__/setup.js',
      coverage: {
         provider: 'v8',
         reporter: ['html', 'text',],
         reportsDirectory: './coverage',
      },
   },
});
