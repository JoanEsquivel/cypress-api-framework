declare namespace Cypress {
  interface Chainable {
    getPetById(id: number | string): Chainable<Response<PetResponses.pet>>;
    postPet(): Chainable<Response<PetResponses.pet>>;
  }
}
