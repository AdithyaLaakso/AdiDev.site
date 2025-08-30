// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import "./src/styles/global.css"

// https://astro.build/config
export default defineConfig({
  site: 'https://adithyalaakso.github.io/AdiDev.site/',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
