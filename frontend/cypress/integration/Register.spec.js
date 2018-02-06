import faker from 'faker'

describe('Register', () => {
  describe('desktop', () => {
    beforeEach(() => {
      cy.viewport(414, 736)
      cy.visit('/register')
    })

    it('loads the app', () => {
      cy.get('.mint-header').should('be.visible')
    })

    it('accepts inputs and sends post data', () => {
      cy.server()
      cy.route({
          method: 'POST',
          url: '/api/register/post',
          status: 200,
          response: {}
        })
        .as('post')

      let name = faker.name.firstName()
      let password = faker.internet.password()

      cy.get('input').first().type(name)
      cy.get('input').last().type(password)
      cy.get('.mint-button.mint-button--primary.mint-button--small.is-plain').click()

      cy.wait('@post')
        .its('requestBody')
        .should('deep.eq', { name, password })
    })
  })

    describe('mobile', () => {
      beforeEach(() => {
        cy.viewport(1280, 768)
        cy.visit('/register')
      })

      it('loads the app', () => {
        cy.get('.container').should('be.visible')
      })

      it('accepts inputs and sends post data', () => {
        cy.server()
        cy.route({
            method: 'POST',
            url: '/api/register/post',
            status: 200,
            response: {}
          })
          .as('post')

        let name = faker.name.firstName()
        let password = faker.internet.password()

        cy.get('input').first().type(name)
        cy.get('input').last().type(password)
        cy.get('.btn.btn-outline-success.btn-sm').click()
        
        cy.wait('@post')
          .its('requestBody')
          .should('deep.eq', { name, password })
      })
    })
})
