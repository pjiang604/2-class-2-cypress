describe('Navigation', () => {
    beforeEach(function() {
        console.log("Starting Navigation Test")
    })

    it('should nagivate to about page', () => {
        // start at index page
        cy.visit('http://localhost:3000')

        // find a link with an href attribute containing "about" and click it
        cy.get('a[href*="about"]').click()

        cy.url().should("include", "/about");
        
        cy.get('h1').contains('About Page')
    })
})