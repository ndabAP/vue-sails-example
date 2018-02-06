module.exports = {
  getProducts: (req, res) => {
    const page = req.param('page')

    Product
      .count()
      .exec((error, amountOfProducts) => {
        if (error) return res.serverError(error)

        Product
          .find()
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
  }
}
