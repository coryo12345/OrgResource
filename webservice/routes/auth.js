/**
 * Handles routing for /user endpoints
 */

var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');

// POST /users/
router.post('/login', authController.login);

module.exports = router;