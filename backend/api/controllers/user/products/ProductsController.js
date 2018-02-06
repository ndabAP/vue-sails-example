module.exports = {
  getProducts: (req, res) => {
    const page = req.param('page')
    const user = CryptographyService.decrypt(req.cookies.user)

    Product
      .count()
      .where({user: {'!': user}})
      .exec((error, amountOfProducts) => {
        if (error) return res.serverError(error)

        Product
          .find()
          .where({user: {'!': user}})
          .populate('user')
          .paginate({page, limit: 6})
          .exec((error, products) => {
            if (error) return res.serverError(error)

            if (products) return res.json({
              products,
              amountOfProducts
            })
          })
      })
  },

  getProductsByUser: (req, res) => {
    const user = CryptographyService.decrypt(req.cookies.user)

    Product
      .find({user})
      .exec((error, products) => {
        if (error) return res.serverError(error)
        if (products) return res.json(products)
      })
  }
}
