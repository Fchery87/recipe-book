let categories = [
    // { id: 1, name: 'Category 1', description: 'Description for Category 1' },
    // { id: 2, name: 'Category 2', description: 'Description for Category 2' },
    // { id: 3, name: 'Category 3', description: 'Description for Category 3' }
    { id: 1, name: 'Breakfast', description: 'Recipes for the most important meal of the day' },
  { id: 2, name: 'Lunch', description: 'Recipes perfect for a midday meal' },
  { id: 3, name: 'Dinner', description: 'Recipes suitable for the evening meal' },
  { id: 4, name: 'Appetizers', description: 'Small dishes served before the main course' },
  { id: 5, name: 'Desserts', description: 'Sweet treats to end your meal on a high note' },
  { id: 6, name: 'Salads', description: 'Fresh and healthy salad recipes' },
  { id: 7, name: 'Soups', description: 'Warm and comforting soup recipes' },
  { id: 8, name: 'Vegetarian', description: 'Meatless recipes for vegetarians' },
  { id: 9, name: 'Seafood', description: 'Recipes featuring delicious seafood' },
  { id: 10, name: 'Beverages', description: 'Refreshing drinks for any occasion' }

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
  