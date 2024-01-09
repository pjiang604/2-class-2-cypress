describe('Home Page', () => {
    it('fill in a radio button', () => {
        cy.visit('http://localhost:3000');

        // look at first radio button
        cy.get('[type="radio"]').check('radio1')

        //check for first checkbox on page
        cy.get('[type="checkbox"]').first().check()
    })

    it('have 3 li tags', () => {
        cy.visit('http://localhost:3000');
        cy.get('li.selected').should('have.length', 3)
    })

    it('BCIT text area', () => {
        cy.visit('http://localhost:3000');
        cy.get('.school').should('include.text', 'BCIT');
        cy.get('.test').invoke('css', 'text-decoration').should('include', 'line-through') //test for styling
        cy.get('.test').invoke('css', 'color').should('include', 'rgb(217, 217, 217)') //test for styling
    })
})