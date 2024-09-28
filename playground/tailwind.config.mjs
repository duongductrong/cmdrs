import { createPreset, extendColors } from "@cmds/ui/config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts}",
    "./index.html",
    "node_modules/@cmds/ui/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        ...extendColors,
      },
    },
  },
  plugins: [createPreset()],
};
