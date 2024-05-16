let categories = [
  { id: 1, name: 'Main Course', description: 'Recipes for the main meal of the day' },
  { id: 2, name: 'Side Dish', description: 'Recipes to accompany the main course' },
  { id: 3, name: 'Appetizer', description: 'Small dishes served before the main course' },
  { id: 4, name: 'Beverage', description: 'Refreshing drinks for any occasion' }
];

// GET all categories
const getAllCategories = (req, res) => {
  res.json(categories);
};

// GET single category by ID
const getCategoryById = (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

// CREATE a new category
const createCategory = (req, res) => {
  const { name, description } = req.body;
  const newCategory = { id: categories.length + 1, name, description };
  categories.push(newCategory);
  res.status(201).json(newCategory);
};

// UPDATE category by ID
const updateCategory = (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const { name, description } = req.body;
  const categoryIndex = categories.findIndex(category => category.id === categoryId);
  if (categoryIndex !== -1) {
    categories[categoryIndex] = { ...categories[categoryIndex], name, description };
    res.json(categories[categoryIndex]);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

// DELETE category by ID
const deleteCategory = (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const categoryIndex = categories.findIndex(category => category.id === categoryId);
  if (categoryIndex !== -1) {
    categories.splice(categoryIndex, 1);
    res.json({ message: 'Category deleted successfully' });
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};