
context('Mau kerja testcase', () => {
    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.viewport(1800, 1204)
      cy.visit('https://maukerja.my')
      cy.wait(2000)
    })
  
    it('user should be able to open all open works', () => {
    cy.wait(1000)
    cy.get('[data-v-3770e26a=""][data-v-ccbcd63a=""] > .has-border-0-touch > :nth-child(2) > .position-relative > .carousel-list > .carousel-slides > .is-active').click()
    cy.get('#comp_profile_upload_resume_1_btn').should('be.visible')
    })
    it('user should be able to login with wrong email & password', () => {
        cy.wait(1000)
        cy.get('[href="/login"] > .is-flex').should('be.visible').click()
        cy.get('.custom-width > .is-size-4').should('be.visible')
        cy.get('.space-y-4 > :nth-child(1) > .control > .input').type('wann@gmail.com')
        cy.get('.field-body > .field > .control > .input').type('12345678')
        cy.get(':nth-child(2) > .button').should('be.visible').click()
        cy.wait(5000)

    })

    it('user should be able to login with account facebook', () => {
        cy.wait(1000)
        cy.get('[href="/login"] > .is-flex').should('be.visible').click()
        cy.get('.custom-width > .is-size-4').should('be.visible')
        cy.get('.space-y-2 > .button').should('be.visible').click() 
    })
    
    it('user should be able to register with google account', () => {
        cy.wait(1000)
        cy.get('[href="/register"] > .is-flex > .is-size-8').should('be.visible').click()
        
        cy.wait(5000)
    })
    it('user should be able to register with facebook account', () => {
        cy.wait(1000)
        cy.get('[href="/register"] > .is-flex > .is-size-8').should('be.visible').click()
        cy.get('.space-y-2 > .button').should('be.visible').click
        cy.wait(5000)
    })
    it('user should be able to register', () => {
        cy.wait(1000)
        cy.get('[href="/register"] > .is-flex > .is-size-8').should('be.visible').click()
        cy.get('.space-y-4 > :nth-child(1) > .control > .input').type('wann')
        cy.get('.vti__input').type('81237878')
        cy.get('.form-wrapper > .field > .control > .input').type('wann12345@gmail.com')
        cy.get(':nth-child(4) > .field > .control > .input').type('123456789')
        cy.wait(5000)
    })
    it('user should be able to register with empty input', () => {
        cy.wait(1000)
        cy.get('[href="/register"] > .is-flex > .is-size-8').should('be.visible').click()
        cy.get('.space-y-4 > .button').should('be.disabled')
        cy.wait(5000)
    })
    it('user should be able to search by wrong keyword', () => {
        cy.wait(1000)
        cy.get('.navbar-start > .custom-search > .control > .input').should('be.visible')
        cy.get('.navbar-start > .custom-search > .control > .input').click()
        cy.get('.is-flex-grow-1 > .field > .autocomplete > .control > .input').type('ceo abcd')
        cy.get('.has-margin-top-10-touch > .button').click()
        cy.get('.box').should('be.visible')
        cy.wait(1000)
    })
   
    it('user should be able to search by keyword', () => {
        cy.wait(1000)
        cy.get('.navbar-start > .custom-search > .control > .input').should('be.visible')
        cy.get('.navbar-start > .custom-search > .control > .input').click()
        cy.get('.is-flex-grow-1 > .field > .autocomplete > .control > .input').type('qa')
        cy.get('.has-margin-top-10-touch > .button').click()
        cy.get('.level-item > p > :nth-child(1)').should('be.visible')
        cy.wait(1000)
    })
    
    it('user should be able to apply jobs', () => {
        cy.wait(1000)
        cy.get('.navbar-start > .custom-search > .control > .input').should('be.visible')
        cy.get('.navbar-start > .custom-search > .control > .input').click()
        cy.get('.is-flex-grow-1 > .field > .autocomplete > .control > .input').type('qa')
        cy.get('.has-margin-top-10-touch > .button').click()
        cy.get('.level-item > p > :nth-child(1)').should('be.visible')
        cy.get('.has-margin-left-5 > .button').should('be.visible').click()
        cy.get('.custom-width > .is-size-4').should('be.visible')
        cy.wait(1000)
    })
  
  })
  