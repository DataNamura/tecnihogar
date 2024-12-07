import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ssttorres.es",
  integrations: [
    tailwind(), 
    icon(), 
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES'
        }
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
});
