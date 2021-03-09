describe('URL Shortener', () => {
    const baseUrl = 'http://localhost:3000/';

    beforeEach(() => {
        cy.fixture('urlData.json')
      .then(urls => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          body: urls
        })
      });

      cy.visit(baseUrl);
    });

    it('Should ')
})