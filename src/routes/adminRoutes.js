const express = require('express');
const adminController = require('../controllers/adminController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

router.get('/', authenticateToken, adminController.getUserById);

module.exports = router;

