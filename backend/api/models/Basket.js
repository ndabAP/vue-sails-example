module.exports = {
  attributes: {
    products: {
      type: 'json',
      required: true
    },

    user: {
      model: 'user'
    }
  }
}
