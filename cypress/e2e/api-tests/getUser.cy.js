/// <reference types="cypress" />

describe('API GET Tests', () => {
  
  it('Validar estatus 200 del endpoint get user', () => {
    cy.getUser().then((response) => {
      expect(response.status).to.eq(200);
    });
  });
 
});

    

