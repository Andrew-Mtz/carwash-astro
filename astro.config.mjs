import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://carflash.autos/",
  integrations: [sitemap()],
  build: {
    minify: true,
  },
});
