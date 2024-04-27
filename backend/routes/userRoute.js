const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/test', userController.test);

exports.router = router;
