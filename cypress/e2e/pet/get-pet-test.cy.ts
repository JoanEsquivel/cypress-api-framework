import commons from '@fixtures/responses/commons.json';
import petPayloads from '@fixtures/payloads/pet.json';
import petTestData from '@fixtures/data/pet/data.json';
import petSchema from '@fixtures/schemas/petSchemaV3.json';

// Test suite name
describe('TS Get Pet - Find pet by ID', () => {
  // Preconditions setup
  before(function () {
    cy.postPet().then((response) => {
      expect(response.status).to.eq(commons.httpStatus.ok.statusCode);
      const petId = response.body.id;
      // You can wrap the variable to use it in other tests
      // cy.wrap(petId).as('petId');
      // Or you can set a system variable to use it in other tests
      cy.setSystemVariable('petId', petId);
    });
  });
  // Test cases for this test suite
  it('TC: Retrieve a pet with a valid ID.', function () {
    cy.getPetById(Cypress.env('petId')).then((response) => {
      expect(response.status).to.eq(commons.httpStatus.ok.statusCode);
      expect(response.body).to.deep.eq(petPayloads.post);
    });
  });
  it('TC: Retrieve a pet with an invalid ID format', function () {
    cy.getPetById(petTestData.post.invalidId).then((response) => {
      // Introduced a bug here to show the terminal report
      expect(response.status).to.eq(commons.httpStatus.ok.statusCode);
    });
  });
  it('TC: Retrieve a pet with a non-existent ID', function () {
    cy.getPetById(petTestData.post.nonExistentId).then((response) => {
      expect(response.status).to.eq(commons.httpStatus.notFound.statusCode);
    });
  });

  // Different approach to validate the response schema
  it('TC: Retrieve a pet with a valid ID and validate the response schema', function () {
    const getPetByIdPath = { endpoint: '/pet/{petId}', method: 'GET', status: 200 };
    cy.getPetById(Cypress.env('petId')).validateSchema(petSchema, getPetByIdPath);
  });
});

