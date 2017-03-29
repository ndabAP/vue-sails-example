module.exports = {

  /**
  * @param req
  * @param res
  */
  post: (req, res) => {
    let {email, name, noob} = req.allParams();

    User.create({
      name,
      email,
      noob
    }).exec((error, user) => {
      if (error) return res.serverError(error);

      sails.log('Created user', user);

      return res.ok();
    });
  }
};
