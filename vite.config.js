import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/

export default defineConfig({
  base: "/vite-react-pwa/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,webp}"], // Ensures files are cached
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "My Vite PWA App",
        short_name: "VitePWA",
        description: "A Progressive Web App built with Vite and React 19",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/vite-react-pwa/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/vite-react-pwa/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
