const mongodb = require('../database/mongoDB.js');
const mysqldb = require('../database/mySqlDB.js');


const controller = {
  post: (req, res) => {
    let startTime = new Date();
    mongodb.insertMany(req.body)
      .then(() => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        res.status(201).send({timeDiff});
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo post")
      });
  },
  get: (req, res) => {
    let startTime = new Date();
    mongodb.findOne().lean().where({id: req.params.id})
      .then(data => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        let data2 = {};
        data2.timeDiff=timeDiff;
        if (data) Object.assign(data2, data);
        res.status(200).send(data2);
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo get")
      });
  },
  del: (req, res) => {
    let startTime = new Date();
    mongodb.deleteOne().where({id: req.params.id})
      .then(() => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        res.status(202).send({timeDiff});
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo del")
      });
  },
  put: (req, res) => {
    let startTime = new Date();
    mongodb.findOneAndUpdate({id: req.params.id}, req.body)
      .then(() => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        res.status(203).send({timeDiff});
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo put")
      });
  },

  getAll: (req, res) => {
    mongodb.find({}).lean().limit(100)
      .then(data => res.status(202).send(data))
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo getAll")
      });
  },
  delAll: (req, res) => {
    mongodb.deleteMany({ __v: 0 })
      .then(() => res.status(202).send('ALL deleted'))
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo delAll")
      });
  },

// below is for MySQL ==============

  sqlget: (req, res) => {
    let startTime = new Date();
    mysqldb.findOne({where:{id: req.params.id}})
      .then(data => {
        let endTime = new Date();
        let timeDiff = endTime - startTime; 
        data.dataValues.timeDiff = timeDiff;
        res.status(200).send(data);
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from sqlget")
      });
  },
  sqlpost: (req, res) => {
    let startTime = new Date();
    mysqldb.create(req.body)
      .then(() => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        res.status(201).send({timeDiff});
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from sqlpost")
      });
  },
  sqldel: (req, res) => {
    let startTime = new Date();
    mysqldb.destroy({where: {id: req.params.id}})
      .then(() => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        res.status(202).send({timeDiff});
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from sqldel")
      });
  },
  sqlput: (req, res) => {
    let startTime = new Date();
    mysqldb.update(req.body, {where: {id: req.params.id}})
      .then(() => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        res.status(203).send({timeDiff});
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from sqlput")
      });
  },

  sqlgetAll: (req, res) => {
    mysqldb.findAll({limit:100})
      .then(data => res.status(202).send(data))
      .catch(err => {
        console.error(err);
        res.status(404).send("error from sqlgetAll")
      });
  },
  sqldeleteAll: (req, res) => {
    mysqldb.destroy({where: {__v:0}})
      .then(() => res.status(202).send('ALL deleted'))
      .catch(err => {
        console.error(err);
        res.status(404).send("error from sqldeleteAll")
      });
  }
}

module.exports = controller;