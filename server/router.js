const router = require('express').Router();
const controller = require('./controller.js');

//req.body
router
  .route('/desc')
  .get(controller.get)
router
  .route('/all')
  .get(controller.getAll)
  .delete(controller.deleteAll)
module.exports = router