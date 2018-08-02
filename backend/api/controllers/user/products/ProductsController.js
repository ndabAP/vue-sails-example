module.exports = {
  getProducts: async (req, res) => {
    const page = req.param('page')
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    const amountOfProducts = await Product
      .count()
      .where({user: {'!': userIdentifier}})
      .catch(error => res.serverError(error))

    const products = await Product
      .find()
      .where({user: {'!': userIdentifier}})
      .populate('user')
      .paginate({page, limit: 6})
      .catch(error => res.serverError(error))

    return res.json({
      products,
      amountOfProducts
    })
  },

  getProductsByUser: async (req, res) => {
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    const products = await Product
      .find({user: userIdentifier})
      .catch(error => res.serverError())

    return res.json(products)
  }
}
