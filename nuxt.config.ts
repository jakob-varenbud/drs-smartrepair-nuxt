// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["assets/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    private: {
      apiKey: process.env.HUBSPOT_API_KEY, // Server-seitige Umgebungsvariable
    },
    // publicRuntimeConfig kann hier definiert werden, wenn nötig
    public: {
      // Beispiel: publicContentApiKey: process.env.PUBLIC_CONTENT_API_KEY
    },
  },
});
