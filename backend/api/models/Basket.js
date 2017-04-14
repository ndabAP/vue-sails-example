module.exports = {
  connection: 'localDiskDb',

  attributes: {
    products: {
      type: 'array',
      required: true
    },

    user: {
      model: 'user'
    }
  }
}
