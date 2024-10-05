import commonResponses from '@fixtures/responses/commons.json';

describe('TS Get Pet - Find pet by ID', () => {
  it('TC: Retrieve a pet with a valid ID.', () => {
    cy.getPetById('1').then((response) => {
      expect(response.status).to.eq(commonResponses.httpStatus.ok.statusCode);
    });
  });
  it('TC: Retrieve a pet with an invalid ID format', () => {
    cy.getPetById('abc').then((response) => {
      expect(response.status).to.eq(
        commonResponses.httpStatus.badRequest.statusCode
      );
    });
  });
  it('TC: Retrieve a pet with a non-existent ID', () => {
    cy.getPetById('000').then((response) => {
      expect(response.status).to.eq(
        commonResponses.httpStatus.notFound.statusCode
      );
    });
  });
});
