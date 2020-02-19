/**
 * Index router, handles routing for all endpoints
 */

var express = require('express');
var router = express.Router();
var authRouter = require('./auth');

// /api/web/auth/ Endpoint
router.use('/auth', authRouter);


module.exports = router;