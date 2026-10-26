import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://jichangwiki.cc",
  output: "static",
  integrations: [
    mdx(),
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/draft/") &&
        !page.includes("/go/") &&
        !page.includes("/go.html"),
    }),
  ],
  build: { format: "directory" },
});
