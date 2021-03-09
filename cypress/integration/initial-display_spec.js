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

    it('Should display the name, long URL and short URL in each shortened URL container', () => {
        cy
        .wait(500)
        .get('section').within(() => {
            cy
            .get('.url:first').within(() => {
                cy
                .get('h3').contains('This is the Final Assesment Mod 3 Turing')
                .get('a').contains('http://localhost:3001/useshorturl/1')
                .get('p').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
            })
            .get('.url:last').within(() => {
                cy
                .get('h3').contains('Why is Apple\'s URL so long?')
                .get('a').contains('https://www.apple.com/2')
                .get('p').contains('https://www.apple.com/?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_490032927326_pgrid_13945964887_&cid=aos-us-kwgo-brand-apple--slid---product-')
            })
        })
    });
})