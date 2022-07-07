/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Get Element by data-testid
     * @example
     * cy.getByTestId('selector')
     */
     getByTestId(selector: string): Chainable<any>
  }
}