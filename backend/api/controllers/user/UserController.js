module.exports = {
  get: async (req, res) => {
    const userIdentifier = CryptographyService.decrypt(req.cookies.user)

    const user = await User
      .findOne({id: userIdentifier})
      .catch(error => res.serverError(error))

    delete user.password

    return res.json(user)
  }
}
