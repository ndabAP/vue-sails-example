module.exports = {
  connection: 'localDiskDb',

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    noob: {
      type: 'boolean'
    }
  }
}
