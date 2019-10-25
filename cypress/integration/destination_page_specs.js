// Oslo has to be the most popular place for this to work...

describe('The Destination Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('Show More').click()
    cy.url().should('include', '/Destination')
  })
  it('contains destination', () => {
    cy.contains('oslo')
    cy.contains('norway')
    cy.contains('europe')
  })
})
