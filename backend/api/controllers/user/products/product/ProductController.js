module.exports = {
  postProduct: (req, res) => {
    const { title, price, description } = req.allParams()
    const user = CryptographyService.decrypt(req.cookies.user)

    Product
      .create({title, description, price, user})
      .exec((error, product) => {
        if (error) return res.serverError(error)

        sails.log.info('Product created', product)

        if (product) return res.ok()
      })
  },

  getProduct: (req, res) => {
    const id = req.param('id')
    const user = CryptographyService.decrypt(req.cookies.user)

    Product
      .findOne({id, user})
      .exec((error, product) => {
        if (error) return res.serverError(error)
        if (product) return res.json(product)
      })
  },

  patchProduct: (req, res) => {
    const {id, title, price, description} = req.allParams()
    const user = CryptographyService.decrypt(req.cookies.user)

    Product
      .update({
        id,
        user
      }, {
        title,
        description,
        price
      })
      .exec((error, product) => {
        if (error) return res.serverError(error)

        sails.log.info('Product patched', product)

        if (product) return res.ok()
      })
  },

  deleteProduct: (req, res) => {
    const id = req.param('id')
    const user = CryptographyService.decrypt(req.cookies.user)

    Product
      .destroy({id, user})
      .exec(error => {
        if (error) return res.serverError(error)

        sails.log.info('Product removed')

        return res.ok()
      })
  }
}
