# Cypress API Testing Framework with TypeScript

This repository contains a starter framework for API testing using TypeScript. It includes all the necessary configurations to start writing and running API tests.

## Prerequisites

- Node.js (v21 or later)
- npm or yarn
- SUPPORTED TYPESCRIPT VERSIONS: >=4.3.5 <5.4.0

### 1. Clone the Repository

```git clone https://github.com/your-username/api-testing-framework.git```
```cd api-testing-framework```

### 2. Install Dependencies

```npm install```
or
```yarn install```

### 3. To format your code using the prettier plugin

```npx prettier . --write```

### 4. To check and fix lint errors

```npm run lint-check```
```npm run lint-fix```

### 5. API used for testing

``` https://petstore3.swagger.io/#/ ```

### 6. To run the tests
Locally:
```npm run testrunner```
or
Terminal:
```npm run cy```

### 7. Libraries used

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress): The modern browser automation framework.
- [Cypress Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter): A reporter for Cypress that generates beautiful reports.
- [Cypress Ajv Schema Validator](https://github.com/sclavijosuero/cypress-ajv-schema-validator): A plugin for Cypress that validates the response schema against the JSON schema.
- [Cypress Terminal Report](https://www.npmjs.com/package/cypress-terminal-report): A plugin for Cypress that collects and displays terminal output in the Cypress UI.
