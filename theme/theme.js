import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Archivo', sans-serif" },
        body: { value: "'Archivo', sans-serif" },
        display: { value: "'Advent Pro', sans-serif" },
      },
      colors: {
        purple: { value: "#00C68D" },
        yellow: { value: "#FFC600" },
      },
    },
  },
  globalCss: {
    html: {
      fontFamily: "body",
      bg: "#080A0F",
      colorScheme: "dark",
      "--color-hero-gradient-glow": "rgba(0, 198, 141, 0.42)",
    },
    body: {
      fontFamily: "body",

      color: "gray.200",
      overflowX: "hidden",
      minH: "100dvh",
      "&::-webkit-scrollbar": {
        width: "9px",
        bg: "#080A0F",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "50px",
        bg: "#00C68D",
      },
    },
    "#root": {
      minH: "100dvh",
      bg: "#080A0F",
    },
  },
});

export const system = createSystem(defaultConfig, config);
