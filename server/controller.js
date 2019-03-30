const getPropertyHelper = require('../database/dbHelpers.js');

const controller = {
  get: (req, res) => {
    getPropertyHelper()
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err))
  }
}

module.exports = controller;