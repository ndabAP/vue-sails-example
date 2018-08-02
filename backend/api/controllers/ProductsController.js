module.exports = {
  getProducts: async (req, res) => {
    const page = req.param('page')

    const amountOfProducts = await Product
      .count()
      .catch(error => res.serverError(error))

    const products = await Product
      .find()
      .populate('user')
      .paginate({page, limit: 6})
      .catch(error => res.serverError(error))

    return res.json({
      products,
      amountOfProducts
    })
  }
}
