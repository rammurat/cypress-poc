describe('Vaidate devices', () => {
    it('1280P', () => {
        cy.viewport(1280, 720)
        cy.visit('http://localhost:3000/')
        cy.wait(2000)
    })

    it('768P', () => {
        cy.viewport(768, 480)
        cy.visit('http://localhost:3000/')
        cy.wait(2000)
    })
})