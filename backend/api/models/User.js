module.exports = {
  connection: 'localDiskDb',

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
  }
}
