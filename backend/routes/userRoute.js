const express = require('express');
const userController = require('../controllers/userController');
const { verifyToken } = require('../utils/verifyUser.js');
const router = express.Router();

router.get('/test', userController.test);
router.put('/update/:userId', verifyToken, userController.updateUser);
router.delete('/delete/:userId', verifyToken, userController.deleteUser);
router.post('/signout', userController.signout);
router.get('/getusers', verifyToken, userController.getUsers);

exports.router = router;
