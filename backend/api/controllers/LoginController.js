module.exports = {

  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    let {
      name,
      password
    } = req.allParams()

    User
      .findOne({
        name,
        password
      })
      .exec((error, user) => {
        if (error) return res.serverError(error)

        if (user) {
          sails.log.info('User logged in', user)

          let encryptedId = CryptographyService.encrypt(user.id)
          res.cookie('user', encryptedId)

          return res.json({
            token: TokenService.issue({
              id: user.id
            })
          })
        }
      })
  }
}
