const sails = require('sails')
const fs = require('fs')

before(function (done) {
  this.timeout(10000)

  sails.lift({}, error => {
    if (error) return done(error)

    done(error, sails)
  })
})

after(function (done) {
  fs.unlinkSync(`${__dirname}/../.tmp/testDB.db`)
  sails.lower(done)
})
