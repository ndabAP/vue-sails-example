import mocks from './../fixtures/mocks'

describe('ProductsGet', () => {
  describe('mobile', () => {
    beforeEach(() => {
      cy.server()
      cy.viewport(414, 736)
      cy.setCookie('user', '1')

      cy.route({
        method: 'GET',
        url: '/api/user/products/getProductsByUser',
        status: 200,
        response: mocks('productsByUser', 12)
      })
        .as('/api/user/products/getProductsByUser')

      cy.visit('/user/products/index', {
        onBeforeLoad: window => {
          window.localStorage.setItem('token', 1)
        }
      })
    })

    it('loads the app', () => {
      cy.get('.mint-header').should('be.visible')
    })

    it('shows products', () => {
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .mint-cell-wrapper > .mint-cell-title > .mint-cell-text').should('not.be.empty')
    })
  })

  describe('desktop', () => {
    beforeEach(() => {
      cy.server()
      cy.viewport(1280, 768)
      cy.setCookie('user', '1')

      cy.route({
        method: 'GET',
        url: '/api/user/products/getProductsByUser',
        status: 200,
        response: mocks('productsByUser', 12)
      })
        .as('/api/user/products/getProductsByUser')

      cy.route({
        method: 'DELETE',
        url: '/api/user/products/product/delete?id=0',
        status: 200,
        response: {}
      })
        .as('/api/user/products/product/delete?id=0')

      cy.visit('/user/products/index', {
        onBeforeLoad: window => {
          window.localStorage.setItem('token', 1)
        }
      })
    })

    it('loads the app', () => {
      cy.get('.container').should('be.visible')
    })

    it('shows products', () => {
      cy.get('tbody > :nth-child(1) > [aria-colindex="1"]').should('not.be.empty')
    })

    it('removes products', () => {
      cy.route({
        method: 'GET',
        url: '/api/user/products/getProductsByUser',
        status: 200,
        response: mocks('productsByUser', 11)
      })
        .as('/api/user/products/product/delete?id=0')
      cy.get(':nth-child(1) > [aria-colindex="4"] > .btn-group > .btn-outline-warning').click()
      cy.wait('@/api/user/products/product/delete?id=0')
      cy.wait('@/api/user/products/getProductsByUser')
      cy.get('table tbody').find('tr').should($tbody => expect($tbody).to.have.length(11))
    })
  })
})
