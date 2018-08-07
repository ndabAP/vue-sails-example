module.exports = function isAuthorized (req, res, next) {
  if (process.env.NODE_ENV === 'test') return next()

  const token = req.headers['x-token']
  if (!token) return res.forbidden()

  try {
    const decryptedSessionStorageToken = TokenService.verify(token)

    User
      .findOne({id: decryptedSessionStorageToken.id})
      .exec((error, user) => {
        if (error) return res.serverError(error)
        if (user) return next()
      })
  } catch (error) {
    return res.forbidden(error)
  }
}
