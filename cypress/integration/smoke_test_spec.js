// cypress/integration/smoke_test_spec.js
describe('Google Smoke Test', () => {
  it('should load google.com successfully', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});

