module.exports = {

  /**
   * @param req
   * @param res
   */
  get: (req, res) => {
    let page = req.param('page')
    let user = CryptographyService.decrypt(req.cookies.user)

    Product
      .count()
      .where({
        user: {'!': user}
      })
      .exec((error, amountOfProducts) => {
        if (error) return res.serverError(error)

        Product
          .find()
          .populate('user')
          .paginate({page: page, limit: 6})
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
