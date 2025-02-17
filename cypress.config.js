// cypress.config.js
module.exports = {
  e2e: {
    supportFile: false, // Disable support file if not needed
    baseUrl: 'https://www.google.com', // Optional: Set a base URL if needed
    specPattern: 'cypress/integration/**/*.js',
  },
};



const { defineConfig } = require('cypress');
const slackReporter = require('cypress-slack-reporter');

module.exports = defineConfig({
  e2e: {
    supportFile: false, // Disable support file if not needed
    baseUrl: 'https://www.google.com', // Optional: Set a base URL if needed
    specPattern: 'cypress/integration/**/*.js',
    pecPattern: 'cypress/integration/**/*.js',
    setupNodeEvents(on, config) {
      slackReporter(on, config);
      return config;
    },
  },
});
