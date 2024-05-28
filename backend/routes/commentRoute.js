const express = require('express');
const { verifyToken } = require('../utils/verifyUser.js');
const commentController = require('../controllers/commentController.js');

const router = express.Router();

router.post('/create', verifyToken, commentController.createComment);
router.get('/getPostComments/:postId', commentController.getPostComments);
router.put(
  '/likeComment/:commentId',
  verifyToken,
  commentController.likeComment
);
router.put(
  '/editComment/:commentId',
  verifyToken,
  commentController.editComment
);
router.delete(
  '/deleteComment/:commentId',
  verifyToken,
  commentController.deleteComment
);
router.get('/getcomments', verifyToken, commentController.getcomments);
exports.router = router;
