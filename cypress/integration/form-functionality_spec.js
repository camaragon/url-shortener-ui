describe('URL Shortener', () => {
    const baseUrl = 'http://localhost:3000/';

    beforeEach(() => {
        cy
        .fixture('urlGetData.json')
        .then(urls => {
            cy
            .intercept('GET', 'http://localhost:3001/api/v1/urls', {
                statusCode: 200,
                body: urls
            })
         }); 
        cy
        .fixture('urlPostData.json')
        .then(urls => {
            cy
            .intercept('POST', 'http://localhost:3001/api/v1/urls', {
                statusCode: 200,
                body: urls
            })
        });

      cy
      .visit(baseUrl);
    });

    it('Should be able to fill out form and add a new shortened URL', () => {
        cy
        .get('input[name=title]').type('This POST intercept worked')
        .get('input[name=long_url]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
        .get('button').click()
        .wait(500)
        .get('section').children().its('length').should('eq', 3);
    })

    it('Should contain the entered input info in the ')

})