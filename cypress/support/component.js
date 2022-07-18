// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'cypress/vue'
// Import commands.js using ES2015 syntax:
import './commands'

// Ensure global styles are loaded
import '../../src/assets/main.css'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('mount', mount)
