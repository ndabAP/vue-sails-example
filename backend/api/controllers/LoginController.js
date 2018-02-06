module.exports = {
  post: (req, res) => {
    const { name, password } = req.allParams()

    User
      .findOne({name})
      .exec((error, user) => {
        if (error) return res.serverError(error)
        if (!user) return res.forbidden()

        User
          .checkIfPasswordIsValid(password, user, (error, isValid) => {
            if (error) return res.serverError(error)
            if (!isValid) return res.forbidden()

            sails.log.info('User logged in', user)

            const encryptedId = CryptographyService.encrypt(user.id)

            return res.json({
              token: TokenService.issue({id: user.id}),
              cookie: encryptedId
            })
          })
      })
  }
}
