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

    User.findOne({
      name,
      password
    }).exec((error, user) => {
      if (error) return res.serverError(error)

      if (user) {
        sails.log.info('User logged in', user)

        res.cookie('user', user.id);

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
