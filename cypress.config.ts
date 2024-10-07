import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress API testing framework report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://petstore3.swagger.io/api/v3',
  },
});
