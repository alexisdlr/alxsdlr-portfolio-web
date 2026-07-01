import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // pnpm + Vite no siempre resuelven el export "./react/*.css" del package.json de ldrs
      "ldrs/react/": `${path.join(dir, "node_modules/ldrs/dist/react")}/`,
    },
  },
});
