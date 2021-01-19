describe('Login with feature data', () => {
    it('Should try to login', () => {
        cy.visit('http://localhost:3000/')

        cy.fixture('users').then(user => {
            const username = user.username
            const password = user.password

            // login user
            cy.get('#inputEmail').type(username)
            cy.get('#inputPassword').type(password)
            cy.get('.Login_formSignin__3Unav').submit()
        })
    })
})