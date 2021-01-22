describe('API', () => {
    it('API testing', () => {
        // validate status code - approach 1
        cy.request('GET', 'http://localhost:3000/api/products/bras/1')
        .should((response) => {
            expect(response.status).to.eq(200)
            expect(response).property('body').to.contain({
                name: 'Gorgeous DD+ - Pale Pink Regency Lace Underwired Non-Padded Balcony Bra',
            })
        })

        // validate status code - approach 2
        cy.request('GET', 'http://localhost:3000/api/products/bras/1').as('_status')
        cy.get('@_status')
        .its('status')
        .should('equal', 200)


        // validate headers 
        cy.request('GET', 'http://localhost:3000/api/products/bras/1').as('bras')
        cy.get('@bras')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')

        
    })
})