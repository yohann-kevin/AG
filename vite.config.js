import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin as vue } from "vite-plugin-vue2";
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import EnvironmentPlugin from "vite-plugin-environment"

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VuetifyResolver()],
   }),
   EnvironmentPlugin("all")
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
