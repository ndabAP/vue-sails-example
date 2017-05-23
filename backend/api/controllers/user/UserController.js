module.exports = {

  /**
   * @param req
   * @param res
   */
  get: (req, res) => {
    let user = CryptographyService.decrypt(req.cookies.user)

    User
      .findOne({
        id: user
      })
      .exec((error, user) => {
        if (error) return res.serverError(error)

        if (user) return res.json(user)
      })
  }
}
