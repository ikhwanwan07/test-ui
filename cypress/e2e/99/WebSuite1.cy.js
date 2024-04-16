describe('H2 Check titles', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport(1800, 1204)
    cy.visit('https://www.pawshake.com.sg', {failOnStatusCode: false ,chromeWebSecurity: false});
    cy.wait(2000)
  })
  it('Check H2 title', () => {
   cy.wait(2000)
   const h2Titles = [
    'Who treats your pet like family',
    "Here's how Pawshake works.",
    'Happiness guaranteed',
    'Services on Pawshake',
    'Why choose Pawshake?',
    'Always stay connected',
    'Blog',
    'Frequently asked questions',
    'Learn More',
    'Popular Cities',
    'About Pawshake',
    'Payment Methods',
    'Find us on'
  ];

  h2Titles.forEach((title) => {
    // Assert that the title exists on the page and contains the correct text
    cy.get('h2').contains(title).should('exist');
  });
  });
});