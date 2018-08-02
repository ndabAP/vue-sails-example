module.exports = {
  post: async (req, res) => {
    const {name, password} = req.allParams()

    const user = await User
      .findOne({name})
      .catch(error => res.serverError(error))

    if (!user) return res.forbidden()

    User
      .checkIfPasswordIsValid(password, user, (error, isValid) => {
        if (error) return res.serverError(error)
        if (!isValid) return res.forbidden()

        sails.log.info('User logged in', user)

        const encryptedIdentifier = CryptographyService.encrypt(user.id)

        return res.json({
          xToken: TokenService.issue({id: user.id}),
          cookie: encryptedIdentifier
        })
      })
  }
}
