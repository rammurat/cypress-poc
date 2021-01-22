describe('Login with feature data', () => {
    it('Should try to login', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.login').click()
        cy.wait(1000)
        cy.fixture('user').then(user => {
            const username = user.email
            const password = user.password

            // login user
            cy.get('#inputEmail').type(username)
            cy.get('#inputPassword').type(password)
            cy.get('.Login_formSignin__3Unav').submit()
        })
    })
})