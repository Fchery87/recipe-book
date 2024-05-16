let recipes = [
  {
    id: 1,
    title: 'Jerk Chicken',
    category: 'Main Course',
    description: 'A spicy and flavorful Caribbean chicken dish.',
    ingredients: ['Chicken', 'Scotch bonnet peppers', 'Allspice', 'Thyme', 'Garlic', 'Onion', 'Vinegar', 'Soy sauce'],
    instructions: 'Marinate the chicken in a mixture of scotch bonnet peppers, allspice, thyme, garlic, onion, vinegar, and soy sauce. Grill until cooked through, and serve hot.'
  },
  {
    id: 2,
    title: 'Ackee and Saltfish',
    category: 'Main Course',
    description: 'Jamaica\'s national dish made with ackee fruit and salted cod.',
    ingredients: ['Ackee', 'Salted cod', 'Onion', 'Tomato', 'Scotch bonnet pepper', 'Bell pepper', 'Thyme', 'Garlic'],
    instructions: 'Soak the salted cod to remove excess salt, then boil until tender. Sauté onion, tomato, scotch bonnet pepper, bell pepper, thyme, and garlic. Add boiled ackee and flaked saltfish. Cook until heated through.'
  },
  {
    id: 3,
    title: 'Roti',
    category: 'Main Course',
    description: 'A flatbread originating from the Indian subcontinent, often served with curries or other dishes.',
    ingredients: ['Whole wheat flour', 'Water', 'Oil', 'Salt', 'Curry filling (optional)'],
    instructions: 'Mix whole wheat flour, water, oil, and salt to form a dough. Divide into balls and roll out into thin circles. Cook on a hot griddle until lightly browned. Serve with curry filling or other accompaniments.'
  },
  {
    id: 4,
    title: 'Callaloo',
    category: 'Side Dish',
    description: 'A traditional Caribbean dish made with leafy greens, often served as a side.',
    ingredients: ['Callaloo leaves', 'Coconut milk', 'Onion', 'Tomato', 'Scotch bonnet pepper', 'Garlic', 'Thyme'],
    instructions: 'Sauté onion, tomato, scotch bonnet pepper, garlic, and thyme. Add callaloo leaves and coconut milk. Simmer until the leaves are tender. Serve as a side dish.'
  },
  {
    id: 5,
    title: 'Coconut Rice and Peas',
    category: 'Side Dish',
    description: 'A classic Caribbean side dish made with rice, coconut milk, and kidney beans.',
    ingredients: ['Rice', 'Coconut milk', 'Kidney beans', 'Coconut oil', 'Onion', 'Garlic', 'Thyme', 'Scotch bonnet pepper'],
    instructions: 'Sauté onion, garlic, and thyme in coconut oil. Add rice, coconut milk, kidney beans, and scotch bonnet pepper. Cook until rice is tender. Serve hot.'
  },
  {
    id: 6,
    title: 'Plantain Chips',
    category: 'Appetizer',
    description: 'Crispy fried plantain slices, perfect as a snack or appetizer.',
    ingredients: ['Green plantains', 'Oil', 'Salt'],
    instructions: 'Peel and slice green plantains thinly. Fry in hot oil until golden brown and crispy. Drain on paper towels and sprinkle with salt. Serve as a snack or appetizer.'
  },
  {
    id: 7,
    title: 'Rum Punch',
    category: 'Beverage',
    description: 'A tropical cocktail made with rum, fruit juices, and grenadine.',
    ingredients: ['Dark rum', 'Pineapple juice', 'Orange juice', 'Lime juice', 'Grenadine', 'Simple syrup', 'Angostura bitters'],
    instructions: 'Mix dark rum, pineapple juice, orange juice, lime juice, grenadine, simple syrup, and a dash of angostura bitters. Serve over ice and garnish with a slice of lime or pineapple.'
  }
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