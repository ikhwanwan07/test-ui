context('99 co testcase 3', () => {
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.viewport(1800, 1204)
      cy.visit('https://www.99.co/singapore')
      cy.wait(2000)
    })
  
    it('user should be able to open all open works', () => {
    cy.wait(1000)   
    })
  
  })