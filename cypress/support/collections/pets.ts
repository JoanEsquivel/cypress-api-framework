import petEndpoints from '@fixtures/endpoints/pet.json';
import petPayloads from '@fixtures/payloads/pet.json';

Cypress.Commands.add('getPetById', (id) => {
  cy.request({
    method: petEndpoints.pet.getPet.method,
    url: `${petEndpoints.pet.basePath}/${id}`,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('postPet', () => {
  cy.request({
    method: petEndpoints.pet.postPet.method,
    url: petEndpoints.pet.basePath,
    body: petPayloads.post,
    failOnStatusCode: false,
  });
});
