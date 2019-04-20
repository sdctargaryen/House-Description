const dbHelpers = require('../database/dbHelpers.js');
const HouseDescriptions = require('../database/mySql.js');

const controller = {
  get: (req, res) => {
    var random = Math.floor(Math.random() * 100);
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
  },


  sqlpost: (req, res) => {
    HouseDescriptions.create(req.body)
      .then(() => res.status(201).send('posted'))
      .catch(err => console.error(err))
  },
  sqlget: (req, res) => {
    var random = Math.floor(Math.random() * 10);
    HouseDescriptions.findAll({where:{id:random}})
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err))
  },
  sqlgetAll: (req, res) => {
    HouseDescriptions.findAll({limit:100})
      .then(data => res.status(202).send(data))
      .catch(err => console.log('error from delete ', err));
  },
  sqldeleteAll: (req, res) => {
    HouseDescriptions.destroy({where: {__v:0}})
      .then(() => res.status(202).send('ALL deleted'))
      .catch(err => console.log('error from delete ', err));
  }
}

module.exports = controller;