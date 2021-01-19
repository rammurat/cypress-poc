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