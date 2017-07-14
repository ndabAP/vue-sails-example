module.exports = {

  /**
   * @param req
   * @param res
   */
  
  post: (req, res) => {
    let standardErrorMessage = 'The username and password that you entered did not match our records. Please double-check and try again.';

    let {
      name,
      password
    } = req.allParams()

    User
      .findOne({
        name,
        password
      })
      .exec((error, user) => {
        if (error) return res.serverError(error)

        if(!user) return res.json(401, {err: standardErrorMessage});

        User.validPassword(password, user, function(err, valid) {
          if (err) {
            return res.json(401, {err: standardErrorMessage});
          }

          if (!valid) {
            sails.log.info('Error', user)

            return res.json(401, {err: standardErrorMessage});
          } else {
            sails.log.info('User logged in', user);

            let encryptedId = CryptographyService.encrypt(user.id)
            res.cookie('user', encryptedId)

            return res.json({
              token: TokenService.issue({
                id: user.id
              })
            });
          }
        });
      })
  }
}
