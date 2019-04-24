const router = require('express').Router();
const controller = require('./controller.js');

//req.body
router
  .route('/desc')
  .post(controller.post)
router
  .route('/desc/:id')
  .get(controller.get)
  .delete(controller.del)
  .put(controller.put)
router
  .route('/all')
  .get(controller.getAll)
  .delete(controller.delAll)


router
  .route('/sqldesc')
  .post(controller.sqlpost)
router
  .route('/sqldesc/:id')
  .get(controller.sqlget)
  .delete(controller.sqldel)
  .put(controller.sqlput)
router
  .route('/sqlall')
  .get(controller.sqlgetAll)
  .delete(controller.sqldeleteAll)

module.exports = router