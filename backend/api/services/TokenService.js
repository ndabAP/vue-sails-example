const jwt = require('jsonwebtoken'), tokenSecret = 'secretissecret';

/**
 * @type {{issue: module.exports.issue}}
 */
module.exports = {

  /**
   * @param payload
   * @return {*}
   */
  issue: (payload) => {
    return jwt.sign(payload, tokenSecret, {
      expiresIn: 60 * 60 * 24
    });
  },

  /**
   * @param token
   * @return {*}
   */
  verify: (token) => {
    return jwt.verify(token, tokenSecret);
  }
}
