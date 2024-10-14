/// <reference types="cypress" />

describe('Set de tests login', () => {
  
    beforeEach(() => {
      cy.elUsuarioNavegaAlSitioWeb();
    });
  
    it('Validar login correcto', () => {
      cy.elUsuarioIngresaCredenciales(Cypress.env('CYPRESS_USERNAME'),Cypress.env('CYPRESS_PASSWORD'));
      cy.CuandoElUsuarioHaceClickEnElBotonLogin();
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });
  
});
  