module.exports = {

  /**
   * @param req
   * @param res
   */
  get: (req, res) => {
    let user = CryptographyService.decrypt(req.cookies.user)

    Product
      .find({
        user: user
      })
      .exec((error, products) => {
        if (error) return res.serverError(error)

        if (products) return res.json(products)
      })
  }
}
