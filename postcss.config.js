import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

// Vite project uses ES modules, so use export default
export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
  ],
};
