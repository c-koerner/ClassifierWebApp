describe('Classifier Website', function () {
    it('is reachable and contains a headline', function () {
        cy.visit('')

        cy.get('h1').should('contain', 'Sind deine Texte BILD genug?')
    })
    it('can select textarea', function() {

        var input = "Sondermeldung, neuer Bildtext";
        var expected = "BILD";

        cy.get('#inputtext').type(input);

        cy.get("#submit").click();

        cy.get('body').should('be', expected);
    })

    /* it('allows to clear the input fields', function () {
        cy.visit('')

        var input = "abc"
        cy.get('#input_encode').type(input)
        cy.get('#input_decode').type(input)

        cy.get('#clear').click()

        cy.get('#input_encode').should('be.empty')
        cy.get('#input_decode').should('be.empty')
    }) */
})