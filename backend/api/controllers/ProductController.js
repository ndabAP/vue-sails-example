module.exports = {

  /**
   * @param req
   * @param res
   */
  post: (req, res) => {
    let {
      title,
      price,
      description
    } = req.allParams();

    Product.create({
      title,
      description,
      price
    }).exec((error, product) => {
      if (error) return res.serverError(error);

      if (product) return res.ok();
    });
  },

  /**
   * @param req
   * @param res
   */
  get: (req, res) => {
    let id = req.param('id');

    Product.findOne({
      id
    }).exec((error, product) => {
      if (error) return res.serverError(error);

      if (product) return res.json(product);
    });
  },

  /**
   * @param req
   * @param res
   */
  patch: (req, res) => {
    let {
      id,
      title,
      price,
      description
    } = req.allParams();

    Product.update({
      id
    }, {
      title,
      description,
      price
    }).exec((error, product) => {
      if (product) return res.ok();

      return res.ok();
    });
  },

  /**
   * @param req
   * @param res
   */
  remove: (req, res) => {
    let id = req.param('id');

    Product.destroy({
      id
    }).exec((error, product) => {
      if (product) return res.ok();

      return res.ok();
    });
  },
};
