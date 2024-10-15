Cypress.Commands.add('elUsuarioNavegaAlSitioWeb', () => {
    cy.visit(Cypress.env('baseUrl')); 
    console.log("El usuario navega al sitio web");
    cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
 });


 