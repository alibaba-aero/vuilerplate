import { mount } from 'cypress/vue';

type MountParams = Parameters<typeof mount>;
type OptionsParam = MountParams[1];

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Get Element by data-testid
       * @example
       * cy.getByTestId('selector')
      */
      getByTestId(selector: string): Chainable<any>
      /**
       * Mount element
       * @example
       * cy.mount(Component)
      */
      mount: typeof mount;
    }
  }
}