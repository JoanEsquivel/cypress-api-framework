import commonResponses from '@fixtures/responses/commons.json';
import petPayloads from '@fixtures/payloads/pet.json';

const invalidId = 'abc';
const nonExistentId = '9999';

// Test suite name
describe('TS Get Pet - Find pet by ID', () => {
  // Preconditions setup
  before(function () {
    cy.postPet().then((response) => {
      expect(response.status).to.eq(commonResponses.httpStatus.ok.statusCode);
      const petId = response.body.id;
      cy.wrap(petId).as('petId');
    });
  });
  // Test cases for this test suite
  it('TC: Retrieve a pet with a valid ID.', function () {
    cy.get<number>('@petId').then((petId) => {
      cy.getPetById(petId).then((response) => {
        expect(response.status).to.eq(commonResponses.httpStatus.ok.statusCode);
        expect(response.body).to.deep.eq(petPayloads.post);
      });
    });
  });
  it('TC: Retrieve a pet with an invalid ID format', function () {
    cy.getPetById(invalidId).then((response) => {
      expect(response.status).to.eq(
        commonResponses.httpStatus.badRequest.statusCode
      );
    });
  });
  it('TC: Retrieve a pet with a non-existent ID', function () {
    cy.getPetById(nonExistentId).then((response) => {
      expect(response.status).to.eq(
        commonResponses.httpStatus.notFound.statusCode
      );
    });
  });
});
