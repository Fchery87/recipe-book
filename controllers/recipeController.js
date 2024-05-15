let recipes = [
    // { id: 1, title: 'Recipe 1', description: 'Description for Recipe 1' },
    // { id: 2, title: 'Recipe 2', description: 'Description for Recipe 2' },
    // { id: 3, title: 'Recipe 3', description: 'Description for Recipe 3' }
    { id: 1, name: 'Spaghetti Carbonara', ingredients: ['spaghetti', 'eggs', 'bacon', 'parmesan cheese'] },
    { id: 2, name: 'Chicken Alfredo Pasta', ingredients: ['chicken', 'fettuccine', 'alfredo sauce', 'garlic'] },
    { id: 3, name: 'Vegetable Stir Fry', ingredients: ['mixed vegetables', 'tofu', 'soy sauce', 'sesame oil'] },
    { id: 4, name: 'Grilled Cheese Sandwich', ingredients: ['bread', 'cheese', 'butter'] },
    { id: 5, name: 'Caprese Salad', ingredients: ['tomatoes', 'mozzarella cheese', 'basil', 'balsamic glaze'] },
    { id: 6, name: 'Beef Tacos', ingredients: ['ground beef', 'taco seasoning', 'tortillas', 'lettuce', 'tomato', 'cheese'] },
    { id: 7, name: 'Spinach and Feta Quiche', ingredients: ['pie crust', 'spinach', 'feta cheese', 'eggs', 'milk'] },
    { id: 8, name: 'Margarita Pizza', ingredients: ['pizza dough', 'tomato sauce', 'mozzarella cheese', 'fresh basil'] },
    { id: 9, name: 'Chocolate Chip Cookies', ingredients: ['flour', 'butter', 'sugar', 'chocolate chips', 'vanilla extract'] },
    { id: 10, name: 'Classic Caesar Salad', ingredients: ['romaine lettuce', 'caesar dressing', 'croutons', 'parmesan cheese'] }
  
  ];
  
  // GET all recipes
  const getAllRecipes = (req, res) => {
    res.json(recipes);
  };
  
  // GET single recipe by ID
  const getRecipeById = (req, res) => {
    const recipeId = parseInt(req.params.recipeId);
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  };
  
  // CREATE a new recipe
  const createRecipe = (req, res) => {
    const { title, description } = req.body;
    const newRecipe = { id: recipes.length + 1, title, description };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  };
  
  // UPDATE recipe by ID
  const updateRecipe = (req, res) => {
    const recipeId = parseInt(req.params.recipeId);
    const { title, description } = req.body;
    const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    if (recipeIndex !== -1) {
      recipes[recipeIndex] = { ...recipes[recipeIndex], title, description };
      res.json(recipes[recipeIndex]);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  };
  
  // DELETE recipe by ID
  const deleteRecipe = (req, res) => {
    const recipeId = parseInt(req.params.recipeId);
    const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    if (recipeIndex !== -1) {
      recipes.splice(recipeIndex, 1);
      res.json({ message: 'Recipe deleted successfully' });
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  };
  
  module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
  };