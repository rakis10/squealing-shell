// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://rakis10.github.io',
    base: 'squealing-shell',
    // add css file
    integrations: [tailwind()],
});
