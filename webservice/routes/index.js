/**
 * Index router, handles routing for all endpoints
 */

var express = require('express');
var router = express.Router();
var authRouter = require('./auth');
var entityRouter = require('./entity');

// /api/web/auth/ Endpoint
router.use('/auth', authRouter);

// /api/web/entity/ Endpoint
router.use('/entity', entityRouter);

module.exports = router;