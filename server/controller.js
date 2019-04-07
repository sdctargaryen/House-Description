const getPropertyHelper = require('../database/dbHelpers.js');

const controller = {
  get: (req, res) => {
    var random = Math.floor(Math.random() * 100)
    getPropertyHelper(random)
      .then(
      data => res.status(200).send(data)
      // data => console.log(data)
      )
      .catch(err => console.error(err))
  }
}

module.exports = controller;