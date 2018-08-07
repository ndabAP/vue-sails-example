module.exports = {
  post: async (req, res) => {
    const {name, password} = req.allParams()

    const user = await User
      .findOne({name})
      .catch(error => res.serverError(error))

    if (!user) return res.forbidden()

    User
      .isValidPassword(password, user, (error, isValid) => {
        if (error) return res.serverError(error)
        if (!isValid) return res.forbidden()

        sails.log.info('User logged in', user)

        return res.json({
          xToken: TokenService.issue({id: user.id}),
          cookie: CryptographyService.encrypt(user.id)
        })
      })
  }
}
