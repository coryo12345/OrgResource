/**
 * Handles routing for /user endpoints
 */

var express = require('express');
var router = express.Router();
var entityController = require('../controllers/entityController');

// GET /api/web/entity/info
router.get('/info', entityController.info);

// GET /api/web/entity/pages
router.get('/pages', entityController.pages);

// GET /api/web/entity/page:id
router.get('/page/:id', entityController.pageContent);

module.exports = router;