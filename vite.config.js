import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/3dPortfolio/", 
  build: {
    rollupOptions: {
      external: ["three"],
    },
  },
});
