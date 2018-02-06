import mocks from './../fixtures/mocks'

describe('ShopIndex', () => {
  describe('mobile', () => {
    beforeEach(() => {
      cy.server()
      cy.viewport(414, 736)
      cy.setCookie('user', '1')
      cy.route({
        method: 'GET',
        url: '/api/user/get',
        status: 200,
        response: {
          'name': 'Joe',
          'createdAt': '2018-01-24T09:50:30.083Z',
          'updatedAt': '2018-01-24T09:50:30.083Z',
          'id': 1
        }
      })
        .as('/api/user/get')

      cy.route({
        method: 'GET',
        url: '/api/user/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
        .as('/api/user/products/get?page=1')

      cy.visit('/user/shop/index', {
        onBeforeLoad: window => {
          window.localStorage.setItem('token', 1)
        }
      })
    })

    it('loads the app', () => {
      cy.get('.mint-header').should('be.visible')
    })

    it('adds a product to basket', () => {
      cy.wait('@/api/user/get')
      cy.wait('@/api/user/products/get?page=1')
      cy.get(':nth-child(1) > .mint-cell-wrapper > .mint-cell-value > .mint-button').click()
      cy.get('.mint-msgbox-btn.mint-msgbox-confirm').click()
    })
  })

  describe('desktop', () => {
    beforeEach(() => {
      cy.server()
      cy.viewport(1280, 768)
      cy.setCookie('user', '1')
      cy.route({
        method: 'GET',
        url: '/api/user/get',
        status: 200,
        response: {
          'name': 'Joe',
          'createdAt': '2018-01-24T09:50:30.083Z',
          'updatedAt': '2018-01-24T09:50:30.083Z',
          'id': 1
        }
      })
        .as('/api/user/get')

      cy.route({
        method: 'GET',
        url: '/api/user/products/get?page=1',
        status: 200,
        response: mocks('products', 12, {amountOfProducts: 12})
      })
        .as('/api/user/products/get?page=1')

      cy.visit('/user/shop/index', {
        onBeforeLoad: window => {
          window.localStorage.setItem('token', 1)
        }
      })
    })

    it('loads the app', () => {
      cy.get('.container').should('be.visible')
    })

    it('adds a product to basket', () => {
      cy.wait('@/api/user/get')
      cy.wait('@/api/user/products/get?page=1')
      cy.get(':nth-child(1) > .card > .card-body > .btn').click()
      cy.get('.ml-auto > :nth-child(2) > .nav-link').contains('Basket (1)')
    })
  })
})
