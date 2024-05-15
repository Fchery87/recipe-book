const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/', (req, res) => {
  res.send('Welcome to my Recipe Book');
});

app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);
app.use('/categories', categoryRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// document.addEventListener('DOMContentLoaded', function() {
//   // Simulated data
//   const categories = [
//       'Pasta',
//       'Salad',
//       'Soup',
//       'Dessert',
//       'Beverage'
//   ];

//   const recipes = [
//       { id: 1, title: 'Spaghetti Aglio e Olio', category: 'Pasta' },
//       { id: 2, title: 'Caprese Salad', category: 'Salad' },
//       { id: 3, title: 'Minestrone Soup', category: 'Soup' },
//       { id: 4, title: 'Tiramisu', category: 'Dessert' },
//       { id: 5, title: 'Mojito', category: 'Beverage' }
//   ];

//   const recipeList = document.getElementById('recipe-list');
//   const addRecipeForm = document.getElementById('add-recipe-form');
//   const categorySelect = document.getElementById('category');

//   // Populate categories select
//   categories.forEach(category => {
//       const option = document.createElement('option');
//       option.textContent = category;
//       option.value = category;
//       categorySelect.appendChild(option);
//   });

//   // Display recipes
//   function displayRecipes() {
//       recipeList.innerHTML = '';
//       recipes.forEach(recipe => {
//           const recipeItem = document.createElement('div');
//           recipeItem.classList.add('recipe-item');
//           recipeItem.innerHTML = `
//               <h3>${recipe.title}</h3>
//               <p><strong>Category:</strong> ${recipe.category}</p>
//               <button class="delete-btn" data-id="${recipe.id}">Delete</button>
//           `;
//           recipeList.appendChild(recipeItem);
//       });
//   }

//   displayRecipes();

//   // Add new recipe
//   addRecipeForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const title = document.getElementById('title').value;
//       const description = document.getElementById('description').value;
//       const ingredients = document.getElementById('ingredients').value;
//       const instructions = document.getElementById('instructions').value;
//       const category = categorySelect.value;

//       const newRecipe = {
//           id: recipes.length + 1,
//           title,
//           description,
//           ingredients: ingredients.split('\n'),
//           instructions,
//           category
//       };

//       recipes.push(newRecipe);
//       displayRecipes();
//       addRecipeForm.reset();
//   });

//   // Delete recipe
//   recipeList.addEventListener('click', function(event) {
//       if (event.target.classList.contains('delete-btn')) {
//           const recipeId = parseInt(event.target.getAttribute('data-id'));
//           const index = recipes.findIndex(recipe => recipe.id === recipeId);
//           if (index !== -1) {
//               recipes.splice(index, 1);
//               displayRecipes();
//           }
//       }
//   });
// });
