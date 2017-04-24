const express          = require('express');
const router           = express.Router();
const RoutesController = require('../controllers/RoutesController');
const routes           = new RoutesController();

/* GET Login Page. */
router.get('/', routes.getIndex);

module.exports = router;
