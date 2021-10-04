import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Enables the same proxy as Firebase Hosting creates, but for local development.
      '/bundles/shop': 'https://us-central1-karas-coffee.cloudfunctions.net/ext-firestore-bundle-server-serve/shop',
    },
  },
});