// cypress/support/e2e.js

// You can add global configurations or custom commands here
// For example, you can add global commands like:
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

