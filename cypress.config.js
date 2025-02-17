// cypress.config.js
module.exports = {
  e2e: {
    supportFile: false, // Disable support file if not needed
    baseUrl: 'https://www.google.com', // Optional: Set a base URL if needed
    specPattern: 'cypress/integration/**/*.js',
  },
};