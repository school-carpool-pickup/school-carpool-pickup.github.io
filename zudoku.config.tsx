import type { ZudokuConfig } from "zudoku";

if (typeof globalThis !== "undefined" && !globalThis.requestIdleCallback) {
  globalThis.requestIdleCallback = (cb) => setTimeout(cb, 1);
  globalThis.cancelIdleCallback = (id) => clearTimeout(id);
}

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "School",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "API Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "https://dbdocs.io/mossnana/school-pickup",
      label: "Database Schema",
      icon: "database",
    }
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
