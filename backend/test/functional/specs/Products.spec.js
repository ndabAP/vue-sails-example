const request = require('supertest')
const chai = require('chai')
const sinon = require('sinon')
const faker = require('faker')

describe('Products', function() {

  it('should return a non empty JSON with products', function(done) {
    sails.hooks.policies.middleware.isauthorized = sinon.stub()
    sails.services.cryptographyservice.decrypt = sinon.stub().returns(1)

    request(sails.hooks.http.app)
      .get('/api/products/get')
      .query({
        page: 1
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) return done(error)

        chai.assert.isNotEmpty(response.body.products)
        done()
      })
  })

  it('should find products by given user', function(done) {
    sails.hooks.policies.middleware.isauthorized = sinon.stub()
    sails.services.cryptographyservice.decrypt = sinon.stub().returns(1)

    let name = 'Joe'
    let password = 'toasty'
    let product = {
      title: 'Cell phone',
      description: 'Now with a cool touch display and many colors.',
      price: 199.95,
      user: 1
    }

    request(sails.hooks.http.app)
      .post('/api/user/products/product/post')
      .set('Cookie', 'user=92f06e135b1749215c2a2bbc6261ffaa')
      .send(product)
      .expect(200)
      .then(() => {

        request(sails.hooks.http.app)
          .post('/api/register/post')
          .send({
            name,
            password
          })
          .expect(200)
          .then(() => {

            request(sails.hooks.http.app)
              .get('/api/user/products/getProductsByUser')
              .set('Cookie', 'user=92f06e135b1749215c2a2bbc6261ffaa')
              .expect('Content-Type', /json/)
              .expect(200)
              .end((error, response) => {
                if (error) return done(error)

                chai.assert.isNotEmpty(response.body)
                done()
              })
          })
      })
  })

})
