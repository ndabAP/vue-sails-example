module.exports = {

  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    let products = req.param('products')

    Basket
      .create({
        products
      })
      .exec((error, basket) => {
        if (error) return res.serverError(error)

        sails.log.info('Created basket', basket)

        if (basket) return res.ok()
      })
  }
}
