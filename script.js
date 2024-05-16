document.addEventListener('DOMContentLoaded', function () {
  const categories = ['Main Course', 'Side Dish', 'Appetizer', 'Beverage'];
  ;

  const recipes = [
    {
      id: 1,
      title: 'Jerk Chicken',
      category: 'Main Course',
      description: 'A spicy and flavorful Caribbean chicken dish marinated with jerk seasoning.',
      ingredients: [
        'Chicken pieces (thighs, drumsticks, or breast)',
        'Jerk seasoning (scotch bonnet peppers, allspice, thyme, garlic, ginger, green onions, soy sauce, vinegar, brown sugar, salt)',
        'Vegetable oil',
      ],
      instructions:
        'Marinate the chicken pieces in the jerk seasoning for at least 2 hours, preferably overnight. Preheat your grill or barbecue to medium-high heat. Grill the chicken pieces, turning occasionally, until cooked through and charred on the outside, about 20-25 minutes. Serve hot with rice and peas.',
    },
    {
      id: 2,
      title: 'Ackee and Saltfish',
      category: 'Main Course',
      description: 'A traditional Jamaican dish made with salted codfish and ackee fruit.',
      ingredients: [
        'Salted codfish',
        'Ackee fruit (canned or fresh)',
        'Onion',
        'Tomato',
        'Scotch bonnet pepper',
        'Bell pepper',
        'Thyme',
        'Garlic',
        'Black pepper',
        'Vegetable oil',
      ],
      instructions:
        'Soak the salted codfish in water overnight to remove excess salt. Drain and flake the codfish. Heat vegetable oil in a skillet over medium heat. Sauté chopped onion, tomato, bell pepper, scotch bonnet pepper, and minced garlic until softened. Add the flaked codfish and cook for a few minutes. Add the ackee fruit (drained if canned) and gently stir to combine. Season with thyme and black pepper. Cook for another 5-7 minutes until heated through. Serve hot with fried dumplings or boiled green bananas.',
    },
    {
      id: 3,
      title: 'Callaloo',
      category: 'Side Dish',
      description: 'A popular Caribbean side dish made with leafy greens and coconut milk.',
      ingredients: [
        'Callaloo leaves or substitute with spinach or Swiss chard',
        'Coconut milk',
        'Onion',
        'Tomato',
        'Scotch bonnet pepper',
        'Garlic',
        'Thyme',
        'Salt',
        'Black pepper',
      ],
      instructions:
        'Wash the callaloo leaves thoroughly and chop them finely. In a pot, heat coconut milk over medium heat until it simmers. Add chopped onion, tomato, minced garlic, thyme, and scotch bonnet pepper. Cook for a few minutes until the vegetables soften. Add the chopped callaloo leaves and stir to combine. Cover and cook for about 10-15 minutes, stirring occasionally, until the callaloo is tender. Season with salt and black pepper to taste. Serve hot as a side dish with rice and beans.',
    },
    {
      id: 4,
      title: 'Roti',
      category: 'Main Course',
      description: 'A Caribbean flatbread served with various fillings such as curry chicken or vegetables.',
      ingredients: ['All-purpose flour', 'Baking powder', 'Salt', 'Water', 'Vegetable oil'],
      instructions:
        'In a large mixing bowl, combine the all-purpose flour, baking powder, and salt. Gradually add water while kneading until a soft dough forms. Divide the dough into equal-sized balls. Roll out each ball into a thin circle on a floured surface. Heat a skillet over medium heat and brush it with vegetable oil. Cook each roti for about 1-2 minutes on each side until golden brown spots appear. Serve hot with curry chicken, vegetables, or your desired filling.',
    },
    {
      id: 5,
      title: 'Conch Fritters',
      category: 'Appetizer',
      description: 'Deep-fried fritters made with conch meat, bell peppers, and spices.',
      ingredients: [
        'Conch meat (fresh or frozen)',
        'All-purpose flour',
        'Cornmeal',
        'Bell pepper',
        'Onion',
        'Scotch bonnet pepper',
        'Egg',
        'Milk',
        'Baking powder',
        'Salt',
        'Black pepper',
        'Vegetable oil (for frying)',
      ],
      instructions:
        'Chop the conch meat into small pieces. In a mixing bowl, combine the chopped conch meat, diced bell pepper, minced onion, finely chopped scotch bonnet pepper, and beaten egg. In another bowl, mix the all-purpose flour, cornmeal, baking powder, salt, and black pepper. Gradually add milk to the dry ingredients, stirring until smooth. Add the conch mixture to the batter and mix well. Heat vegetable oil in a deep fryer or skillet. Drop spoonfuls of the batter into the hot oil and fry until golden brown and crispy. Drain on paper towels and serve hot with dipping sauce.',
    },
    {
      id: 6,
      title: 'Curry Goat',
      category: 'Main Course',
      description: 'Tender goat meat cooked in a rich and spicy curry sauce.',
      ingredients: [
        'Goat meat (bone-in or boneless)',
        'Curry powder',
        'Onion',
        'Garlic',
        'Ginger',
        'Tomato',
        'Scotch bonnet pepper',
        'Potato',
        'Carrot',
        'Coconut milk',
        'Vegetable oil',
        'Salt',
        'Black pepper',
      ],
      instructions:
        'Season the goat meat with curry powder, salt, and black pepper. Heat vegetable oil in a large pot over medium heat. Sauté chopped onion, minced garlic, and grated ginger until fragrant. Add the seasoned goat meat and cook until browned on all sides. Add chopped tomato, scotch bonnet pepper, diced potato, and carrot to the pot. Stir in coconut milk and enough water to cover the ingredients. Bring to a boil, then reduce heat and simmer for 1.5 to 2 hours, or until the goat meat is tender. Adjust seasoning with salt and black pepper if needed. Serve hot with rice and peas.',
    },
    {
      id: 7,
      title: 'Rum Punch',
      category: 'Beverage',
      description: 'A fruity and tropical cocktail made with rum, fruit juice, and grenadine.',
      ingredients: [
        'White rum',
        'Pineapple juice',
        'Orange juice',
        'Grenadine syrup',
        'Lime juice',
        'Simple syrup',
        'Orange slices (for garnish)',
        'Maraschino cherries (for garnish)',
      ],
      instructions:
        'In a pitcher, combine white rum, pineapple juice, orange juice, grenadine syrup, lime juice, and simple syrup. Stir well to mix. Chill in the refrigerator for at least 1 hour. To serve, fill glasses with ice and pour the rum punch over the ice. Garnish with orange slices and maraschino cherries. Enjoy responsibly!',
    },
  ]
  ;

  const recipeList = document.getElementById('recipe-list');
  const addRecipeForm = document.getElementById('add-recipe-form');
  const categorySelect = document.getElementById('category');

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe) => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipe-item');
      recipeItem.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Category:</strong> ${recipe.category}</p>
                <p>${recipe.description}</p>
                <h4>Ingredients:</h4>
                <ul>${recipe.ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join('')}</ul>
                <h4>Instructions:</h4>
                <p>${recipe.instructions}</p>
                <button class="delete-btn" data-id="${
                  recipe.id
                }">Delete</button>
            `;
      recipeList.appendChild(recipeItem);
    });
  }

  displayRecipes();

  addRecipeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const ingredients = formData.get('ingredients').split('\n');
    const instructions = formData.get('instructions');
    const category = formData.get('category');

    const newRecipe = {
      id: recipes.length + 1,
      title,
      description,
      ingredients,
      instructions,
      category,
    };

    recipes.push(newRecipe);
    displayRecipes();
    addRecipeForm.reset();
  });

  recipeList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
      const recipeId = parseInt(event.target.dataset.id);
      const index = recipes.findIndex((recipe) => recipe.id === recipeId);
      if (index !== -1) {
        recipes.splice(index, 1);
        displayRecipes();
      }
    }
  });
});