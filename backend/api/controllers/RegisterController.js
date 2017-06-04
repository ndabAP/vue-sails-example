module.exports = {

  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    let {name, password} = req.allParams()

    User
      .create({
        name,
        password
      })
      .exec((error, user) => {
        if (error) return res.serverError(error)

        sails.log.info('Created user', user)

        if (user) return res.ok()
      })
  }
}
