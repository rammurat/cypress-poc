describe('Login with feature data', () => {

    beforeEach(() => {
        cy.fixture('user.json').as('user1')
    })

    it('Should try to login', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.login').click()
        cy.wait(1000)

        cy.get('#inputEmail').type(this.user1.email)
        cy.get('#inputPassword').type(this.user1.password)
        cy.get('.Login_formSignin__3Unav').submit()
        
    })
})