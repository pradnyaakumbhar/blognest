const express = require('express');
const { verifyToken } = require('../utils/verifyUser.js');
const postController = require('../controllers/postController.js');

const router = express.Router();

router.post('/create', verifyToken, postController.create);

exports.router = router;
