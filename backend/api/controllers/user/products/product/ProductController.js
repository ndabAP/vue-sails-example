module.exports = {
  postProduct: async (req, res) => {
    const {title, price, description} = req.allParams()
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    const product = await Product
      .create({title, description, price, user: userIdentifier})
      .catch(error => res.serverError(error))

    sails.log.info('Product created', product)

    return res.ok()
  },

  getProduct: async (req, res) => {
    const id = req.param('id')
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    const product = await Product
      .findOne({id, user: userIdentifier})
      .catch(error => res.serverError(error))

    return res.json(product)
  },

  patchProduct: async (req, res) => {
    const {id, title, price, description} = req.allParams()
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    const product = await Product
      .update({
        id,
        user: userIdentifier
      }, {
        title,
        description,
        price
      })
      .catch(error => res.serverError(error))

    sails.log.info('Product patched', product)

    return res.ok()
  },

  deleteProduct: async (req, res) => {
    const id = req.param('id')
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    await Product
      .destroy({id, user: userIdentifier})
      .catch(error => res.serverError(error))

    sails.log.info('Product removed')

    return res.ok()

  }
}
