// Oslo has to be the most popular place for this to work...

describe('The Home Page', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully loads', function() {
    cy.visit('/'); // change URL to match your dev URL
  });

  it('contains header', function() {
    cy.contains('Dream destination');
  });
  it('contains seachbar', function() {
    cy.contains('search location');
    cy.get('input').should('not.have.value');
    cy.get('input').type('rome{enter}');
    cy.url().should('include', '/search/rome');
    cy.contains('rome');
  });
  it('contains link to wordcloud', function() {
    cy.contains('click here');
    cy.contains('click here').click();
    cy.url().should('include', '/wordcloud');
  });
  it('contains tree most popular', function() {
    cy.contains('trondheim');
    cy.contains('oslo');
    cy.contains('paris');
  });
  it('card routes to detailed card', () => {
    cy.contains('Show More');
    cy.contains('Show More').click();
    cy.url().should('include', '/Destination');
  });
  it('contains catchy phrase', function() {
    cy.contains('Where is your ultimate destination?');
  });
});
