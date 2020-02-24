/**
 * Handles routing for /user endpoints
 */

var express = require('express');
var router = express.Router();
var entityController = require('../controllers/entityController');

// GET /api/web/entity/info
router.get('/info', entityController.entityInfo);

module.exports = router;