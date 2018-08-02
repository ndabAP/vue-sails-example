const jwt = require('jsonwebtoken')
const tokenSecret = 'secretissecret'

module.exports = {
  issue: payload => jwt.sign(payload, tokenSecret, {expiresIn: '7d'}),
  verify: token => jwt.verify(token, tokenSecret)
}
