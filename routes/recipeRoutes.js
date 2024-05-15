const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipeController');

// GET all recipes
router.get('/', RecipeController.getAllRecipes);

// GET single recipe by ID
router.get('/:recipeId', RecipeController.getRecipeById);

// CREATE a new recipe
router.post('/', RecipeController.createRecipe);

// UPDATE recipe by ID
router.put('/:recipeId', RecipeController.updateRecipe);

// DELETE recipe by ID
router.delete('/:recipeId', RecipeController.deleteRecipe);

module.exports = router;