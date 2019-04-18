const dbHelpers = require('../database/dbHelpers.js');

const controller = {
  get: (req, res) => {
    var random = Math.floor(Math.random() * 100)
    dbHelpers.getPropertyHelper(random)
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err))
  },
  getAll: (req, res) => {
    dbHelpers.getPropertyAll()
      .then(data => res.status(202).send(data))
      .catch(err => console.log('error from delete ', err));
  },
  deleteAll: (req, res) => {
    dbHelpers.deletePropertyAll()
      .then(() => res.status(202).send('ALL deleted'))
      .catch(err => console.log('error from delete ', err));
  }
}

module.exports = controller;