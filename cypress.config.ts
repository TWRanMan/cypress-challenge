import { defineConfig } from "cypress";

export default defineConfig({
  
  env: {
    // Add any environment variables you need here
    apiUrl: "https://petstore3.swagger.io/api/v3",
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/tests/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1080,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
