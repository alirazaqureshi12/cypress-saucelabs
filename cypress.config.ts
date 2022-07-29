import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  experimentalSourceRewriting: false,
  experimentalSessionAndOrigin: false,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 760
  },
});
