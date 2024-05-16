import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname,'src/index.html'),
        registration: resolve(__dirname,'src/registration.html'),
        mapView: resolve(__dirname,'src/mapView.html'),
        mapView2: resolve(__dirname,'src/mapView2.html'),
        gridView: resolve(__dirname, 'src/gridView.html'),
        favoritesPage: resolve(__dirname, 'src/favoritesPage.html'),
        menu: resolve(__dirname,'src/menu.html'),
        contactPage: resolve(__dirname, 'src/contactPage.html'),
        bh1: resolve(__dirname,'src/bh1.html'),
        bh1map: resolve(__dirname,'src/bh1map.html'),
        bh2: resolve(__dirname,'src/bh2.html'),
        bh3: resolve(__dirname,'src/bh3.html'),
        bh4: resolve(__dirname,'src/bh4.html'),
        bh5: resolve(__dirname,'src/bh5.html'),
        bh5map: resolve(__dirname,'src/bh5map.html'),
        bh6: resolve(__dirname,'src/bh6.html'),
        bh6map: resolve(__dirname,'src/bh6map.html'),
        bh7: resolve(__dirname,'src/bh7.html'),
        
      },
    }
  },
});
