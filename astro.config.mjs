// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ponchik0.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'ru', 'uk'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
