context('99 co testcase 3', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport(1800, 1204)
    cy.visit('https://www.pawshake.com.sg', {failOnStatusCode: false ,chromeWebSecurity: false});
    cy.wait(2000)
  })

  it('user should be able to check all links', () => {
  cy.wait(1000)  
  cy.get('.__className_d57c57 > :nth-child(8)').each(($link) => {
    // Get the href attribute of each link
    const href = $link.attr('href');
    
    // Click on the link
    cy.wrap($link).click();

    // Check if the URL changes after clicking
    cy.url().should('contains', 'pawshake.com.sg');

    // Check if the page is loaded successfully 
    cy.get('body').should('not.be.empty');
    
    // Navigate back to the Blog page
    cy.go('back');
  }); 
  })

})