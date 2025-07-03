const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  supportFile: 'cypress/support/e2e.ts'
  },
  env: {
    devapp_url: 'https://devapp.xyicon.com/#auth/login',
    qaapp_url: 'https://qaapp.xyicon.com/#auth/login',
    prod_url: 'https://app.xyicon.com/#auth/login',
  },
});
