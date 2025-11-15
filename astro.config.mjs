import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default {
  integrations: [react(), tailwind()],
  vite: {
    ssr: {
      external: ['react', 'react-dom']
    }
  }
};
