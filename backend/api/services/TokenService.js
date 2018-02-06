const jwt = require('jsonwebtoken')
const tokenSecret = 'secretissecret'

module.exports = {

  /**
   * @param payload
   */
  issue: payload => jwt.sign(payload, tokenSecret, {expiresIn: '7d'}),

  /**
   * @param token
   */
  verify: token => jwt.verify(token, tokenSecret)
}
