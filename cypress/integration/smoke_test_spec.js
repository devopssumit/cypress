// cypress/integration/smoke_test_spec.js
describe('Google Smoke Test', () => {
  it('should load google.com successfully', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });

  it('should have a search input field', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').should('exist');
  });

  it('should have a Google logo', () => {
    cy.visit('https://www.google.com');
    cy.get('img[alt="Google"]').should('exist');
  });

  it('should have a sign-in button', () => {
    cy.visit('https://www.google.com');
    cy.get('a[href="https://accounts.google.com/ServiceLogin"]').should('exist');
  });

  it('should be able to search for a keyword', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress testing{enter}');
    cy.url().should('include', 'search');
  });

  it('should show search results for a query', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').type('Cypress testing{enter}');
    cy.get('#search').should('exist');
  });

  it('should load Google images', () => {
    cy.visit('https://www.google.com/imghp');
    cy.get('input[aria-label="Search by image"]').should('exist');
  });

  it('should show Google news', () => {
    cy.visit('https://news.google.com');
    cy.get('h1').contains('Top stories');
  });

  it('should have a privacy policy link', () => {
    cy.visit('https://www.google.com');
    cy.contains('Privacy').should('exist');
  });

  it('should load the Google homepage in less than 2 seconds', () => {
    const start = Date.now();
    cy.visit('https://www.google.com');
    cy.wrap(Date.now() - start).should('be.lt', 2000);
  });
});
