/// <reference types="cypress" />
describe('page', () => {
    it('works', () => {
        cy.visit('https://jlh.ch/cypress/');
        for (let i = 0; i < 25; i++) {
            cy.contains('Save').click();
        }
    });
});
