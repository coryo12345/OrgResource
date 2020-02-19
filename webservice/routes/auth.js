/**
 * Handles routing for /user endpoints
 */

var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');

// GET /api/web/auth/login
router.get('/login', authController.isLoggedIn);

// POST /api/web/auth/login
router.post('/login', authController.login);

module.exports = router;