module.exports = {
  postBasket: (req, res) => {
    const products = req.param('products')

    Basket
      .create({products})
      .exec((error, basket) => {
        if (error) return res.serverError(error)

        sails.log.info('Created basket', basket)

        if (basket) return res.ok()
      })
  }
}
