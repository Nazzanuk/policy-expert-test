describe('Simple e2e tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Page is loading ok', () => {
        cy.contains('Beans');
        cy.contains('Add');
        cy.contains('Total to Pay');
    })

    it('Add a item to our shopping list', () => {
        cy.contains('Add').click()
        cy.contains('0.50')
    })

    it('Add another item to our shopping list', () => {
        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="Coke"]').click()
        cy.contains('Add').click()
        cy.contains('0.70')
    })

    it('Check our deals show up', () => {
        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="Coke"]').click()
        cy.contains('Add').click()
        cy.contains('Add').click()

        cy.contains('Coke 2 for £1')
    })

    it('Check our items with weight validation', () => {
        cy.contains('Please specify a weight for Oranges').should('not.exist')
        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="Oranges"]').click()
        cy.contains('Add').click()

        cy.contains('Please specify a weight for Oranges')
        cy.get('[data-test-id="weight-input"]').click().type(0.2)
        cy.contains('Add').click()
        cy.contains('0.2kg @ £1.99/kg')
    })

    it('Check a complex receipt', () => {
        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="Coke"]').click()
        cy.contains('Add').click()
        cy.contains('Add').click()
        cy.contains('Add').click()

        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="Oranges"]').click()
        cy.get('[data-test-id="weight-input"]').click().type(0.2)
        cy.contains('Add').click()

        cy.get('.MuiSelect-root').click()
        cy.get('[data-value="Beans"]').click()
        cy.contains('Add').click()
        cy.contains('Add').click()
        cy.contains('Add').click()
        cy.contains('Add').click()
        cy.contains('Add').click()

        cy.contains('5.00')
        cy.contains('-0.90')
        cy.contains('4.10')


    })
})