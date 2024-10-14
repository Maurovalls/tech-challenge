Cypress.Commands.add('elUsuarioIngresaCredenciales', (username,password) => {
    cy.fixture('locatorsLogin').then((locator) =>{
        cy.get(locator.inputUsuario).type(username);
        cy.get(locator.inputContraseña).type(password);
    });
 });

 Cypress.Commands.add('CuandoElUsuarioHaceClickEnElBotonLogin', () => {
    cy.fixture('locatorsLogin').then((locator) =>{
        cy.get(locator.botonLogin).click('center');
    });
 });

