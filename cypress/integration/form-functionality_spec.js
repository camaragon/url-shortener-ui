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
        .get('input[name=long_url]').type('https://calendar.google.com/calendar/u/0/r/week/2021/2/9?pli=1')
        .get('button').click()
        .wait(500)
        .get('section').children().its('length').should('eq', 3);
    })

    it('Should contain the entered input info in the newly added shortened URL', () => {
        cy
        .get('input[name=title]').type('This POST intercept worked')
        .get('input[name=long_url]').type('https://calendar.google.com/calendar/u/0/r/week/2021/2/9?pli=1')
        .get('button').click()
        .wait(500)
        .get('section').within(() => {
            cy
            .get('.url:last').within(() => {
                cy
                .get('h3').contains('This POST intercept worked')
                .get('a').contains('https://calendar.google.com/calendar/3')
                .get('p').contains('https://calendar.google.com/calendar/u/0/r/week/2021/2/9?pli=1')
            })
        })
    })

})