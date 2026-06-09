import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  server: { port: 6700 },
  site: 'https://flo-martin.github.io',
  base: '/json-differ',
});
