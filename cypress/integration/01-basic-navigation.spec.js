describe('Validate Home -> PDP journey', () => {
    it('Load home page', () => {
        // load application home page
        cy.visit('http://localhost:3000/')

        // go to PSP page
        cy.contains('All Products').click()

        // go to PDP page
        cy.get('.card').first().click()

        // validate PDP url 
        cy.url().should('include', '/knickers')
    })
})

describe('Debugging', () => {
    it('Pause', () => {
        // load application home page
        cy.visit('http://localhost:3000/')

        cy.pause()

        cy.visit('http://localhost:3000/products')

        cy.debug()

        cy.visit('http://localhost:3000/products/bras/2')
    })
})
