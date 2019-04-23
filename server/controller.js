const dbHelpers = require('../database/dbHelpers.js');
const {HouseDescriptions} = require('../database/mySql.js');

const controller = {
  get: (req, res) => {
    var startTime = new Date();
    dbHelpers.get(req.body.id)
      .then(data => {
        res.status(200).send(data);
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        console.log(`time elapsed: ${timeDiff}, id: ${req.body.id}, _id:${data._id}`);
      })
      .catch(err => console.error(err))
  },
  post: (req, res) => {
    var startTime = new Date();
    dbHelpers.post(req.body)
      .then((data) => {
        res.status(200).send(`posted ${data}`);
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        console.log(`time elapsed: ${timeDiff}, id: ${req.body.id}`);
      })
      .catch(err => console.error(err))
  },
  del: (req, res) => {
    var startTime = new Date();
    dbHelpers.del(req.params.id)
      .then(data => {
        res.status(200).send(`success deleted ${data.deletedCount} data`);
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        console.log(`time elapsed: ${timeDiff}, id: ${req.params}, _id:${data._id}`);
      })
      .catch(err => console.error(err))
  },  getAll: (req, res) => {
    dbHelpers.getPropertyAll()
      .then(data => res.status(202).send(data))
      .catch(err => console.log('error from delete ', err));
  },
  delAll: (req, res) => {
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
    var startTime = new Date();
    var random = Math.ceil(Math.random() * 10000000);
    HouseDescriptions.findAll({where:{id:random}})
      .then(data => {
        res.status(200).send(data);
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        console.log(`time elapsed: ${timeDiff} =><= id: ${random}`);
      })
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