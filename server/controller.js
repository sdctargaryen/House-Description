const mongodb = require('../database/mongoSchema.js');
// const mysqldb = require('../database/mySqlDB.js');
// const pgsqldb = require('../database/postgreSqlDB.js');

// mongoDB controller
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
  getPlay: (req, res) => {
    reqArr = req.params.queries.split("||");
    mongodb.find({[reqArr[2]]: reqArr[0]}).limit(10).skip(10*(reqArr[1] - 1))
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.error(err);
        res.status(404).send("error from mongo get")
      });
  },
  get: (req, res) => {
    let startTime = new Date();
    mongodb.findOne().where({id: req.params.id}).lean()
      .then(data => {
        let endTime = new Date();
        let timeDiff = endTime - startTime;
        let data2 = {timeDiff};
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

// MySQL Controller ==============

  // sqlgetPlay: (req, res) => {
  //   let startTime = new Date();
  //   mysqldb.findAll({limit:1, where:{"propertyInfo_location": req.params.queries}})
  //     .then(data => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime; 
  //       if (data && data[0].dataValues) data[0].dataValues.timeDiff = timeDiff;
  //       res.status(200).send(data[0]);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqlgetPlay")
  //     });
  // },
  // sqlget: (req, res) => {
  //   let startTime = new Date();
  //   mysqldb.findOne({where:{id: req.params.id}})
  //     .then(data => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime; 
  //       if (data && data.dataValues) data.dataValues.timeDiff = timeDiff;
  //       res.status(200).send(data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqlget")
  //     });
  // },
  // sqlpost: (req, res) => {
  //   let startTime = new Date();
  //   mysqldb.create(req.body)
  //     .then(() => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime;
  //       res.status(201).send({timeDiff});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqlpost")
  //     });
  // },
  // sqldel: (req, res) => {
  //   let startTime = new Date();
  //   mysqldb.destroy({where: {id: req.params.id}})
  //     .then(() => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime;
  //       res.status(202).send({timeDiff});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqldel")
  //     });
  // },
  // sqlput: (req, res) => {
  //   let startTime = new Date();
  //   mysqldb.update(req.body, {where: {id: req.params.id}})
  //     .then(() => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime;
  //       res.status(203).send({timeDiff});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqlput")
  //     });
  // },

  // sqlgetAll: (req, res) => {
  //   mysqldb.findAll({limit:100})
  //     .then(data => res.status(202).send(data))
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqlgetAll")
  //     });
  // },
  // sqldeleteAll: (req, res) => {
  //   mysqldb.destroy({where: {__v:0}})
  //     .then(() => res.status(202).send('ALL deleted'))
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from sqldeleteAll")
  //     });
  // },

  // // Postgres Controller ==============

  // pggetPlay: (req, res) => {
  //   let startTime = new Date();
  //   pgsqldb.findAll({ limit:1, where:{"propertyInfo_location": req.params.queries}})
  //     .then(data => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime; 
  //       if (data && data[0].dataValues) data[0].dataValues.timeDiff = timeDiff;
  //       res.status(200).send(data[0]);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pggetPlay")
  //     });
  // },
  // pgget: (req, res) => {
  //   let startTime = new Date();
  //   pgsqldb.findOne({where:{id: req.params.id}})
  //     .then(data => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime; 
  //       if(data && data.dataValues) {data.dataValues.timeDiff = timeDiff;}
  //       res.status(200).send(data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pgget")
  //     });
  // },
  // pgpost: (req, res) => {
  //   let startTime = new Date();
  //   pgsqldb.create(req.body)
  //     .then(() => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime;
  //       res.status(201).send({timeDiff});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pgpost")
  //     });
  // },
  // pgdel: (req, res) => {
  //   let startTime = new Date();
  //   pgsqldb.destroy({where: {id: req.params.id}})
  //     .then(() => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime;
  //       res.status(202).send({timeDiff});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pgdel")
  //     });
  // },
  // pgput: (req, res) => {
  //   let startTime = new Date();
  //   pgsqldb.update(req.body, {where: {id: req.params.id}})
  //     .then(() => {
  //       let endTime = new Date();
  //       let timeDiff = endTime - startTime;
  //       res.status(203).send({timeDiff});
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pgput")
  //     });
  // },

  // pggetAll: (req, res) => {
  //   pgsqldb.findAll({limit:100})
  //     .then(data => res.status(202).send(data))
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pggetAll")
  //     });
  // },
  // pgdeleteAll: (req, res) => {
  //   pgsqldb.destroy({where: {__v:0}})
  //     .then(() => res.status(202).send('ALL deleted'))
  //     .catch(err => {
  //       console.error(err);
  //       res.status(404).send("error from pgdeleteAll")
  //     });
  // }
}

module.exports = controller;