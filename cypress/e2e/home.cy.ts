context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.getByTestId('test-link')
      .should('have.attr', 'href')
      .and('eq', '/test')
    cy.getByTestId('test-link').click()

    cy.url().should('eq', 'http://localhost:3000/test')

    cy.getByTestId('home-link')
      .should('have.attr', 'href')
      .and('eq', '/')
    cy.getByTestId('home-link').click()

    cy.url().should('eq', 'http://localhost:3000/')
  })
})