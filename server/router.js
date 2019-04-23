const router = require('express').Router();
const controller = require('./controller.js');

//req.body
router
  .route('/desc')
  .get(controller.get)
  .post(controller.post)
router
  .route('/desc/:id')
  .delete(controller.del)
router
  .route('/all')
  .get(controller.getAll)
  .delete(controller.delAll)
router
  .route('/sqldesc')
  .get(controller.sqlget)
  .post(controller.sqlpost)
router
  .route('/sqlall')
  .get(controller.sqlgetAll)
  .delete(controller.sqldeleteAll)

module.exports = router