module.exports = {
  postBasket: async (req, res) => {
    const products = req.param('products')

    const basket = await Basket
      .create({products})
      .catch(error => res.serverError(error))

    sails.log.info('Created basket', basket)

    return res.ok()
  }
}
