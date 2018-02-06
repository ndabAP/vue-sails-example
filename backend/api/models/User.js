const bcrypt = require('bcryptjs')

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    products: {
      collection: 'product',
      via: 'user'
    },
    baskets: {
      collection: 'basket',
      via: 'user'
    }
  },

  customToJSON () {
    let user = this.toObject()

    delete user.password

    return user
  },

  /**
   * @param user
   * @param next
   */
  beforeCreate: (user, next) => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error)

      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error)

        user.password = hash
        next()
      })
    })
  },

  /**
   * @param password
   * @param user
   * @param callback
   */
  checkIfPasswordIsValid: (password, user, callback) => {
    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (error) callback(error)

      if (isMatch) {
        callback(null, true)
      } else callback(error, false)
    })
  }
}
