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

describe('Login user', () => {
    it('Load home page', () => {
        // load application home page
        cy.visit('http://localhost:3000/')

        // go to PDP page
        cy.get('.login').click()

        // login user
        cy.get('#inputEmail').type('ram@gmail.com')
        cy.get('#inputPassword').type('idea123')
        cy.get('.Login_formSignin__3Unav').submit()

        // // validate my account url
        cy.contains('Sign out')
    })
})

describe('Validate Invalid user', () => {
    it('Load home page', () => {
        // load application home page
        cy.visit('http://localhost:3000/')

        // go to PDP page
        cy.get('.login').click()

        // login user
        cy.get('#inputEmail').type('invalid@gmail.com')
        cy.get('#inputPassword').type('idea123')
        cy.get('.Login_formSignin__3Unav').submit()

        // // validate my account url
        cy.contains('Invalid user or password')
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

describe('API', () => {
    it('API testing', () => {
        // load product
        cy.request('GET', 'http://localhost:3000/api/products/bras/1')
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response).property('body').to.contain({
                name: 'Gorgeous DD+ - Pale Pink Regency Lace Underwired Non-Padded Balcony Bra',
            })
        })
        

        // search for a term using post
        cy.request('POST', 'http://localhost:3000/api/search', {
            text: 'bra'
        })
        .its('body')
        .as('searchResult')
    })
})