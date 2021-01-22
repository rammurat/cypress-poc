describe('Login page', () => {
    it('Validate valid user', () => {
        // load application home page
        cy.visit('http://localhost:3000/')

        // go to login page
        cy.get('.login').click()

        // login user
        // cy.get('#inputEmail').type('ram@gmail.com')
        // cy.get('#inputPassword').type('idea123')
        // cy.get('.Login_formSignin__3Unav').submit()

        // login user using variables
        cy.get('#inputEmail').as('email')
        cy.get('@email').type('ram@gmail.com')
        cy.get('#inputPassword').as('password')
        cy.get('@password').type('idea123')
        cy.wait(2000)
        cy.get('.Login_formSignin__3Unav').submit()

        // // validate my account url
        cy.contains('Sign out')
    })
})

describe('Login page', () => {
    it('Validate Invalid user', () => {
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