const sails = require('sails')
const request = require('supertest')
const chai = require('chai')
const sinon = require('sinon')
const faker = require('faker')

describe('Product', function() {
  it('should return a non empty JSON with the product', function(done) {
    sails.hooks.policies.middleware.isauthorized = sinon.stub()
    sails.services.cryptographyservice.decrypt = sinon.stub().returns(1)

    request(sails.hooks.http.app)
      .get('/api/user/products/product/get')
      .query({
        id: 1
      })
      .expect(200)
      .end((error, response) => {
        if (error) return done(error)
        chai.assert.isNotEmpty(response.body)
        done()
      })
  })

  it('should post data', function(done) {
    sails.hooks.policies.middleware.isauthorized = sinon.stub()
    sails.services.cryptographyservice.decrypt = sinon.stub().returns(1)
    
    const title = faker.commerce.productName()
    const description = faker.commerce.productAdjective()
    const price = faker.commerce.price()

    request(sails.hooks.http.app)
      .post('/api/user/products/product/post')
      .send({
        title,
        description,
        price
      })
      .expect(200)
      .then(() => {

        Product
          .findOne({
            title
          })
          .then(product => {
            chai.assert.strictEqual(product.title, title)
            done()
          })
          .catch(error => done(error))
      })
  })

})
