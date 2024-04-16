context('99 co testcase 3', () => {
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.viewport(1800, 1204)
      cy.visit('https://www.pawshake.com.sg', {failOnStatusCode: false ,chromeWebSecurity: false});
      cy.wait(2000)
    })
  
    it('user should be able to check search dog boarding', () => {
    cy.wait(1000)
    cy.get('.sc-39165724-3 > .rt-TextFieldRoot > .rt-TextFieldInput').type('one-north')
    cy.get('#ex-list-item-0 > strong', { timeout: 10000 }).should('be.visible').click()
    cy.get(':nth-child(4) > .sc-dcd0d8ed-0').click()

    //assertion

    cy.get('body').should('not.be.empty')
    cy.url().should('contains', 'One-north');
    cy.url().should('contains', 'petBoarding');





     
    })
    
  
  })