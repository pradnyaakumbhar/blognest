const express = require('express');
const { verifyToken } = require('../utils/verifyUser.js');
const postController = require('../controllers/postController.js');

const router = express.Router();

router.post('/create', verifyToken, postController.create);
router.get('/getposts', postController.getPosts);
router.delete(
  '/deletepost/:postId/:userId',
  verifyToken,
  postController.deletepost
);
router.put(
  '/updatepost/:postId/:userId',
  verifyToken,
  postController.updatepost
);
exports.router = router;
