import { createTestingPinia } from '@pinia/testing'
import Component from './HelloWorld.vue'

const factory = (options: any) => cy.mount(Component, {
  global: {
    plugins: [createTestingPinia({ createSpy: cy.spy }), i18n],
  },
  ...options,
})

describe('HelloWorld', () => {
  it('should mount correctly', () => {
    factory({})
    cy.getByTestId('counter-pinia').contains('Counter Pinia: 0')
    cy.getByTestId('add-btn-pinia')
      .contains('Add pinia')
      .click()
      .contains('Add pinia')
    cy.getByTestId('counter-pinia').contains('Counter Pinia: 1')

    cy.getByTestId('counter').contains('Counter: 0')
    cy.getByTestId('add-btn')
      .contains('Add')
      .click()
      .contains('Add')
    cy.getByTestId('counter').contains('Counter: 1')
  })

  it('should change locale correctly', () => {
    factory({})
    cy.getByTestId('local').contains('Local')
    cy.getByTestId('toggle-button')
      .contains('Button Change Locale')
      .click()
      .contains('دکمه تغییر زبان')
    cy.getByTestId('local').contains('محلی')
  })
})
