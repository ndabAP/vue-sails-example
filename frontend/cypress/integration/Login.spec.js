describe('Login', () => {
  describe('desktop', () => {
    beforeEach(() => {
      cy.viewport(414, 736)
      cy.visit('/login')
    })

    it('loads the app', () => {
      cy.get('.mint-header').should('be.visible')
    })

    it('accepts inputs and sends post data', () => {
      cy.server()
    })
  })

    describe('mobile', () => {
      beforeEach(() => {
        cy.viewport(1280, 768)
        cy.visit('/login')
      })

      it('loads the app', () => {
        cy.get('.container').should('be.visible')
      })

      it('accepts inputs and sends post data', () => {
        cy.server()
      })
    })
})
