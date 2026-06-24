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
      favicon: "/logo.svg",
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
      pagination: false,
      markdown: {
        headingLinks: false,
      },
      sidebar: [
        {
          label: "Startseite",
          link: "/",
        },
        "use-cases",
        {
          label: "Demonstratoren",
          items: [
            {
              label: "Hivegent",
              link: "https://hivegent.raise.dfki.dev",
              attrs: { target: "_blank" },
            },
            {
              label: "RAGold",
              link: "https://ragold.raise.dfki.dev",
              attrs: { target: "_blank" },
            },
            {
              label: "Single Sign-On",
              link: "https://sso.raise.dfki.dev",
              attrs: { target: "_blank" },
            },
          ],
        },
        {
          label: "Open Source",
          items: [
            {
              label: "Hivegent",
              link: "https://github.com/dfki-ebls/hivegent",
              attrs: { target: "_blank" },
            },
            {
              label: "RAGold",
              link: "https://github.com/dfki-ebls/ragold",
              attrs: { target: "_blank" },
            },
            {
              label: "Infrastruktur",
              link: "https://github.com/dfki-ebls/raise-infra",
              attrs: { target: "_blank" },
            },
          ],
        },
        {
          label: "Rechtliches",
          items: ["imprint", "privacy"],
        },
      ],
    }),
  ],
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
