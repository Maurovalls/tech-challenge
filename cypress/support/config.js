Cypress.Commands.add('elUsuarioNavegaAlSitioWeb', () => {
    cy.fixture('configUrls').then((locator) =>{
        cy.visit(locator.urlWebSauceDemo); 
        console.log("El usuario navega al sitio web");
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
    });
 });
 