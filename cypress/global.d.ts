declare namespace Cypress {
  interface Chainable {
    // Pet endpoints
    getPetById(id: number | string): Chainable<Response<PetResponses.pet>>;
    postPet(): Chainable<Response<PetResponses.pet>>;

    // Utils
    setSystemVariable(key: string, value: string | number | boolean): Chainable<void>;
  }
}
