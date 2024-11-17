import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react"; // Importa la integración de React
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon(), react()], // Añade react() a las integraciones
});
