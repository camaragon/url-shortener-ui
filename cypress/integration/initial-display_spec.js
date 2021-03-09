describe('URL Shortener', () => {
    const baseUrl = 'http://localhost:3000/';

    beforeEach(() => {
        cy
        .fixture('urlData.json')
      .then(urls => {
        cy
        .intercept('GET', 'http://localhost:3001/api/v1/urls', {
          body: urls
        })
      });

      cy
      .visit(baseUrl);
    });

    it('Should display the page title of URL Shortener', () => {
        cy
        .get('h1').contains('URL Shortener')
    })

    it('Should display the existing shortened URLs', () => {
        cy
        .wait(500)
        .get('section').children().its('length').should('eq', 2);
    });

    it('Should display the existing shortened URLs', () => {
        cy
        .wait(500)
        .get('section').children().its('length').should('eq', 2);
    });
})