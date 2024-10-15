Cypress.Commands.add('apiGet', (endpoint) => {
    cy.request({
      method: 'GET',
      url: Cypress.env('apiUrl') + endpoint,
      failOnStatusCode: false
    });
  });
  
Cypress.Commands.add('getUser', () => {
    cy.apiGet('/users/2');
  });