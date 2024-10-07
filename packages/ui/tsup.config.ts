import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/config/*"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "recharts",
    "@medusajs/icons",
  ],
});
