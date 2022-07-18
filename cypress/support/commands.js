// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('getByTestId', (selector, ...args) => cy.get(`[data-testid=${selector}]`, ...args))
