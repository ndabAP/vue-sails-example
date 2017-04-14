module.exports = {
  connection: 'localDiskDb',

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'text'
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
