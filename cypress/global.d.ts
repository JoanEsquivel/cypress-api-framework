declare namespace Cypress {
  interface Chainable {
    getPetById(id: string): Chainable<Response<PetResponses.pet>>;
  }
}
