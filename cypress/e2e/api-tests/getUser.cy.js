/// <reference types="cypress" />

    describe('Get user', () => {

      it('Validar estatus 200 para el endpoint obtener usuario especifico', () => {

        cy.request('GET', 'https://reqres.in/api/users/2')
          .then((response) => {
            expect(response.status).to.eq(200);
          });
      });
    });

    

