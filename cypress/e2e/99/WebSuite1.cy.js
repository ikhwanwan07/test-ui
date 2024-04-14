describe('Example Test Suite', () => {
  it('Visits the website and performs actions', () => {
    // Visit a webpage
    cy.visit('https://99.co', {failOnStatusCode: false ,chromeWebSecurity: false});

    // Perform actions
   cy.wait(2000)
  });
});