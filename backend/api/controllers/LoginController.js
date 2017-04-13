module.exports = {

  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    let {
          email,
          name
        } = req.allParams()

    User.findOne({
      name,
      email
    }).exec((error, user) => {
      if (error) return res.serverError(error)

      if (user) {
        sails.log('User logged in', user)

        return res.json({
          token: TokenService.issue({
            id: user.id
          })
        })
      } else {
        return res.forbidden()
      }
    })
  }
}
