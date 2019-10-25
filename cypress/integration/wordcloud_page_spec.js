describe('The Wordcloud Page', () => {
  it('successfully loads', () => {
    cy.visit('/wordcloud');
    cy.url().should('include', '/wordcloud');
  });
  it('contains places in wordcloud', ()=> {
    cy.contains('Oslo');
    cy.contains('Bangkok');
    cy.contains('Nairobi');
  });
});
