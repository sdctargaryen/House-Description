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
router
  .route('/sqldesc')
  .get(controller.sqlget)
  .post(controller.sqlpost)
router
  .route('/sqlall')
  .get(controller.sqlgetAll)
  .delete(controller.sqldeleteAll)

module.exports = router