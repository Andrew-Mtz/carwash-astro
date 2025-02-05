import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://carwash-astro.vercel.app/",
  integrations: [sitemap()],
  build: {
    minify: true,
  },
});
