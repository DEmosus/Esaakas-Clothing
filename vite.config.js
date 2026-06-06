import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "favicon.svg",
        "icons/apple-touch-icon.png",
      ],
      devOptions: {
        enabled: true,
        navigateFallback: "/",
        type: "module",
      },
      workbox: {
        // Empty array in BOTH dev and prod — eliminates the "glob pattern
        // matches no files" warning in both modes.
        // Workbox's injectManifest/generateSW handles the precache manifest
        // separately via the VitePWA plugin's own asset tracking.
        globPatterns: [],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-static-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/i\.ibb\.co\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "product-images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/i\.postimg\.cc\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "category-images-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      manifest: {
        name: "Esaaka Clothing",
        short_name: "Esaaka",
        description: "An editorial luxury clothing store",
        theme_color: "#131008",
        background_color: "#F9F6F0",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icons/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  logLevel: mode === "development" ? "warn" : "info",
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Vite 8 uses Rolldown which requires manualChunks to be a FUNCTION,
        // not a plain object (breaking change from Rollup).
        // The function receives a module ID and returns the chunk name.
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/"))
              return "vendor";
            if (id.includes("react-router-dom") || id.includes("@remix-run"))
              return "router";
            if (
              id.includes("@reduxjs") ||
              id.includes("react-redux") ||
              id.includes("redux-persist")
            )
              return "redux";
            if (id.includes("firebase")) return "firebase";
            if (id.includes("@stripe") || id.includes("stripe"))
              return "stripe";
            if (id.includes("styled-components")) return "styling";
          }
        },
      },
    },
  },
}));
