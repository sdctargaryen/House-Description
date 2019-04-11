const router = require('express').Router();
const controller = require('./controller.js');

//req.body
router
  .route('/desc')
  .get(controller.get)

module.exports = router