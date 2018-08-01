const request = require('supertest')
const chai = require('chai')
const faker = require('faker')

describe('Login', function() {
  it('should send a non empty JSON response', function(done) {
    let name = 'Joe'
    let password = 'toasty'

    request(sails.hooks.http.app)
      .post('/api/register/post')
      .send({
        name,
        password
      })
      .expect(200)
      .then(() => {

        request(sails.hooks.http.app)
          .post('/api/login/post')
          .send({
            name,
            password
          })
          .expect(200)
          .end((error, response) => {
            if (error) return done(error)

            chai.assert.isNotEmpty(response.body.xToken)
            chai.assert.isNotEmpty(response.body.cookie)
            done()
          })
      })
  })

  it('should deny access', function(done) {
    request(sails.hooks.http.app)
      .post('/api/login/post')
      .send({
        name: faker.name.findName(),
        password: faker.internet.password()
      })
      .expect(403, done)
  })
})
