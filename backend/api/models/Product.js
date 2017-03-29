module.exports = {
  connection: 'localDiskDb',

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
    }
  }
};
