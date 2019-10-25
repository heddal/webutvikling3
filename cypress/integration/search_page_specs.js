describe('The Search Page', () => {
  it('successfully loads', () => {
    cy.visit('/search');
    cy.get('input').type('{enter}');
    cy.url().should('include', '/search/');
    cy.contains('trondheim');
    cy.contains('Europe');
  });
  it('contains seachbar', function() {
    cy.contains('search location');
    cy.get('input').should('not.have.value');
    cy.get('input').type('amsterdam{enter}');
    cy.url().should('include', '/search/amsterdam');
    cy.contains('amsterdam');
  });
  it('card routes to detailed card', () => {
    cy.contains('Show More').click();
    cy.url().should('include', '/Destination');
  });

});
