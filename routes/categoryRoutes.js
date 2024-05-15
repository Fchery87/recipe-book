const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');

// GET all categories
router.get('/', CategoryController.getAllCategories);

// GET single category by ID
router.get('/:categoryId', CategoryController.getCategoryById);

// CREATE a new category
router.post('/', CategoryController.createCategory);

// UPDATE category by ID
router.put('/:categoryId', CategoryController.updateCategory);

// DELETE category by ID
router.delete('/:categoryId', CategoryController.deleteCategory);

module.exports = router;