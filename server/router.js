const router = require('express').Router();
const controller = require('./controller.js');

// for MongoDB =====================
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
  .route('/getPlay/:queries')
  .get(controller.getPlay)


// for MySQL ======================
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
router
  .route('/sqlgetPlay/:queries')
  .get(controller.sqlgetPlay)


// for PostgreSQL ==================
router
  .route('/pgdesc')
  .post(controller.pgpost)
router
  .route('/pgdesc/:id')
  .get(controller.pgget)
  .delete(controller.pgdel)
  .put(controller.pgput)
router
  .route('/pgall')
  .get(controller.pggetAll)
  .delete(controller.pgdeleteAll)
router
  .route('/pggetPlay/:queries')
  .get(controller.pggetPlay)

module.exports = router;
