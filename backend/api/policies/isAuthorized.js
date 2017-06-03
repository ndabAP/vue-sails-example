module.exports = function isAuthorized (req, res, next) {
  let token = req.headers.token

  if ('undefined' === token) return res.forbidden()

  let decryptedSessionStorageToken = TokenService.verify(token)

  User
    .findOne({
      id: decryptedSessionStorageToken.id
    })
    .exec((error, user) => {
      if (error) return res.serverError(error)
      if (user) return next()
    })
}
