import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      // Include react-native-web and flow stripping
      babel: {
        presets: ["@babel/preset-flow"],
        plugins: ["react-native-web", "@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: {
      // Alias react-native to react-native-web for web compatibility
      "react-native": "react-native-web",
    },
  },
});
