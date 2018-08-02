const crypto = require('crypto')

module.exports = {
  encrypt: (decrypted) => {
    let cipher = crypto.createCipher('aes-256-cbc', 'd6F3Efeq')
    let crypted = cipher.update(decrypted.toString(), 'utf8', 'hex')
    crypted += cipher.final('hex')

    return crypted
  },

  decrypt: (encrypted) => {
    let decipher = crypto.createDecipher('aes-256-cbc', 'd6F3Efeq')
    let decrypted = decipher.update(encrypted.toString(), 'hex', 'utf8')
    decrypted += decipher.final('utf8')

    return decrypted
  }
}
