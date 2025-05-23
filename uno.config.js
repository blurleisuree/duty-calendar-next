import presetWind4 from "@unocss/preset-wind4";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      reset: true,
    }),
  ],
  theme: {
    colors: {
      primary: "#293553",
      active: "#0083FF",
      secondary: "#4FE09C",
      neutral: "#77838B",
      line: "#acacac",
    },
  },
    shortcuts: {
    // Кастомные утилиты
    // 'btn': 'px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80',
  },
});
