/**
 * Handles routing for /user endpoints
 */

var express = require('express');
var router = express.Router();
var fileController = require('../controllers/fileController');
var authMiddleware = require('../middleware/authMiddleware');
var multer = require('multer');
var upload = multer();

// POST /api/web/file/upoad
router.post('/upload', authMiddleware.validSession, upload.single('file'), fileController.upload);

module.exports = router;