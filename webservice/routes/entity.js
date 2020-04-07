/**
 * Handles routing for /user endpoints
 */

var express = require('express');
var router = express.Router();
var entityController = require('../controllers/entityController');
var authMiddleware = require('../middleware/authMiddleware');

// GET /api/web/entity/info
router.get('/info', authMiddleware.validSession, entityController.info);

// GET /api/web/entity/pages
router.get('/pages', authMiddleware.validSession, entityController.pages);

// GET /api/web/entity/page:id
router.get('/page/:id', authMiddleware.validSession, entityController.pageContent);

module.exports = router;