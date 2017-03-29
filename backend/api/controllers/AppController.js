module.exports = {

  /**
   * @param req
   * @param res
   */
  serve: (req, res) => {
    const fs = require('fs');

    let app = __dirname + '/../../assets/index.html';
    fs.exists(app, (exists) => {
      if (!exists) {
        return res.notFound('The requested file does not exist.');
      }

      fs.createReadStream(app).pipe(res);
    });
  }
};
