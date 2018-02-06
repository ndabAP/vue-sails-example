module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'float',
      required: true
    },

    user: {
      model: 'user'
    }
  }
}
