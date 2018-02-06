const request = require('supertest')
const chai = require('chai')
const faker = require('faker')

describe('Register', function() {
  it('should persist data', function(done) {
    const name = faker.name.findName()
    const password = faker.internet.password()

    request(sails.hooks.http.app)
      .post('/api/register/post')
      .send({
        name,
        password
      })
      .expect(200)
      .then(() => {

        User
          .find({
            name
          })
          .then(user => {
            chai.assert.isDefined(user)
            done()
          })
          .catch(error => done(error))
      })
  })

  it('should accept inputs', function(done) {
    request(sails.hooks.http.app)
      .post('/api/register/post')
      .send({
        name: faker.name.findName(),
        password: faker.internet.password()
      })
      .expect(200, done)
  })
})
