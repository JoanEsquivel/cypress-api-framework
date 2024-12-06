Cypress.Commands.add('setSystemVariable', (key, value) => {
  Cypress.env(key, value);
});
