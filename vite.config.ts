import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      external: ["framer-motion", "styled-components"],
    },
  },
  define: {
    "global.React": "React",
    "global.ReactDOM": "ReactDOM",
    "global.FramerMotion": "window.FramerMotion",
    "global.styled": "window.styled",
  },
});
