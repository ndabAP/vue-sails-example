import mocks from './../fixtures/mocks'
import faker from 'faker'

describe('Home', () => {
  describe('desktop', () => {
    beforeEach(() => {
      cy.server()
      cy.viewport(414, 736)
    })

    it('loads the app', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
      cy.visit('/')

      cy.get('.mint-header').should('be.visible')
    })

    it('shows second page', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 6, {amountOfProducts: 12})
      })
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=2',
        status: 200,
        response: mocks('products', 6, {amountOfProducts: 12})
      })
      cy.visit('/')

      cy.get('.mint-button.mint-button--primary.mint-button--small').click()
      cy.get('.mint-header').next().find('a').should($a => expect($a).to.have.length(7))
    })

    it('shows a product and closes the product', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })

      cy.get('.mint-header').next().get('a .mint-cell-wrapper .mint-cell-value button:first').click()
      cy.get('.mint-msgbox-title').should('not.be.empty')
      cy.get('.mint-msgbox-btn.mint-msgbox-confirm').click()
    })

    it('changes language', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
      cy.visit('/')

      cy.get('.mint-button.mint-button--default.mint-button--normal').last().click()
      cy.get('.mint-actionsheet-list li:nth-child(3)').click()
      cy.get('.mint-button.mint-button--default.mint-button--normal').first().contains('Startseite')
    })
  })

  describe('mobile', () => {
    beforeEach(() => {
      cy.server()
      cy.viewport(1280, 768)
    })

    it('loads the app', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
      cy.visit('/')

      cy.get('.container').should('be.visible')
    })

    it('shows second page', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 6, {amountOfProducts: 10})
      })
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=2',
        status: 200,
        response: mocks('products', 4, {amountOfProducts: 10})
      })
      cy.visit('/')

      cy.get('.b-pagination').find('li').next().next().next().find('a:first').first().click()
      cy.get('.row')
        .children()
        .should($row => expect($row).to.have.length(4))
    })

    it('shows help, let\'s user type in ', () => {
      cy.route({
        method: 'POST',
        url: '/api/help',
        status: 200,
        response: {
          message: {
            answer: faker.lorem.sentence()
          }
        }
      })
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
      cy.visit('/')

      cy.get('.navbar-nav.ml-auto li a:first').click()
      cy.get('.modal-dialog input').type(`${faker.lorem.sentence()}`)
    })

    it('changes the language', () => {
      cy.route({
        method: 'GET',
        url: '/api/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
      cy.visit('/')

      cy.get('.navbar-nav.ml-auto li:nth-child(2) a:first').click()
      cy.get('.navbar-nav.ml-auto li:nth-child(2) div a:nth-child(2)').click()
      cy.get('#nav_collapse ul li:first a').contains('Startseite')
    })
  })
})
