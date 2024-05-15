const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// GET all users
router.get('/', UserController.getAllUsers);

// GET single user by ID
router.get('/:userId', UserController.getUserById);

// CREATE a new user
router.post('/', UserController.createUser);

// UPDATE user by ID
router.put('/:userId', UserController.updateUser);

// DELETE user by ID
router.delete('/:userId', UserController.deleteUser);

module.exports = router;