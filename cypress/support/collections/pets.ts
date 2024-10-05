import petEndpoints from '@fixtures/endpoints/pet.json';

Cypress.Commands.add('getPetById', (id: string) => {
  cy.request({
    method: petEndpoints.pet.getPet.method,
    url: `${petEndpoints.pet.basePath}/${id}`,
    failOnStatusCode: false,
  });
});
