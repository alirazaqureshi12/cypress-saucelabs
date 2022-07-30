import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  experimentalSourceRewriting: false,
  experimentalSessionAndOrigin: false,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 760,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  }
  },
});

