const request = require('supertest')
const chai = require('chai')
const faker = require('faker')

describe('Help', function() {
  it('should return a non empty string', function(done) {

    request(sails.hooks.http.app)
      .post('/api/help')
      .send({})
      .expect(200)
      .then(response => {
        chai.assert.isNotEmpty(response.body.answer)
        done()
      })
  })
})
