import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://raise.dfki.de",
  integrations: [
    starlight({
      title: "RAISE",
      description: "Retrieval-Augmented Innovation and SME Enablement",
      logo: {
        src: "./src/assets/logo.png",
        alt: "RAISE Logo",
      },
      favicon: "./src/assets/logo.png",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/dfki-ebls",
        },
      ],
      customCss: ["./src/styles/global.css"],
      pagefind: false,
      tableOfContents: false,
      defaultLocale: "de",
      sidebar: [],
      // [
      //   {
      //     label: "Projekt",
      //     autogenerate: { directory: "project" },
      //   },
      // ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
