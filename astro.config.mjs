// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production target: GitHub Pages project site.
  // Final URL → https://metapro-art.github.io/pharmasportslabs/
  site: 'https://metapro-art.github.io',
  base: '/pharmasportslabs',
  // Emit trailing-slash-free clean URLs that match GitHub Pages behaviour.
  trailingSlash: 'ignore',
  build: {
    // /servicios → servicios.html: GitHub Pages lo sirve sin el 301 de
    // barra final que sufren los directorios (/servicios → /servicios/).
    format: 'file',
  },
  image: {
    // Optimise local images at build time (sharp). Remote not needed yet.
    responsiveStyles: true,
  },
  compressHTML: true,
});
