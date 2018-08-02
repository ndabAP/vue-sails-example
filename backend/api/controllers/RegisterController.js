module.exports = {
  post: async (req, res) => {
    const {name, password} = req.allParams()

    await User
      .create({name, password})
      .catch(error => res.serverError(error))

    return res.ok()
  }
}
