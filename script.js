document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        'Pasta',
        'Salad',
        'Soup',
        'Dessert',
        'Beverage'
    ];

    const recipes = [
        { id: 1, title: 'Spaghetti Aglio e Olio', category: 'Pasta', description: 'A classic Italian pasta dish with garlic and olive oil.', ingredients: ['Spaghetti', 'Garlic', 'Olive Oil', 'Parsley'], instructions: 'Cook the spaghetti according to package instructions. In a skillet, sauté garlic in olive oil until fragrant. Toss the cooked spaghetti with the garlic oil and parsley.' },
        { id: 2, title: 'Caprese Salad', category: 'Salad', description: 'A refreshing salad with tomatoes, mozzarella, and basil.', ingredients: ['Tomatoes', 'Mozzarella Cheese', 'Basil', 'Olive Oil', 'Balsamic Vinegar'], instructions: 'Slice the tomatoes and mozzarella. Arrange them on a plate, alternating between tomato and mozzarella slices. Garnish with fresh basil leaves, drizzle with olive oil and balsamic vinegar.' },
        { id: 3, title: 'Minestrone Soup', category: 'Soup', description: 'A hearty Italian vegetable soup.', ingredients: ['Vegetable Broth', 'Tomatoes', 'Carrots', 'Celery', 'Onion', 'Pasta', 'Beans'], instructions: 'In a large pot, sauté the onion, carrots, and celery in olive oil. Add the tomatoes, broth, beans, and pasta. Simmer until the vegetables are tender and the pasta is cooked.' },
        { id: 4, title: 'Tiramisu', category: 'Dessert', description: 'A classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.', ingredients: ['Ladyfingers', 'Mascarpone Cheese', 'Eggs', 'Sugar', 'Coffee', 'Cocoa Powder'], instructions: 'Brew strong coffee and let it cool. Whip the egg yolks with sugar until light and fluffy. Fold in the mascarpone cheese. Dip the ladyfingers in the coffee and arrange them in a dish. Top with the mascarpone mixture and dust with cocoa powder.' },
        { id: 5, title: 'Mojito', category: 'Beverage', description: 'A refreshing Cuban cocktail with rum, lime, and mint.', ingredients: ['White Rum', 'Lime Juice', 'Sugar', 'Mint Leaves', 'Club Soda'], instructions: 'Muddle the lime juice, sugar, and mint leaves in a glass. Add the rum and stir. Top with club soda and garnish with a lime wedge and mint sprig.' }
    ];

    const recipeList = document.getElementById('recipe-list');
    const addRecipeForm = document.getElementById('add-recipe-form');
    const categorySelect = document.getElementById('category');

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    function displayRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.innerHTML = `
                <h3>${recipe.title}</h3>
                <p><strong>Category:</strong> ${recipe.category}</p>
                <p>${recipe.description}</p>
                <h4>Ingredients:</h4>
                <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                <h4>Instructions:</h4>
                <p>${recipe.instructions}</p>
                <button class="delete-btn" data-id="${recipe.id}">Delete</button>
            `;
            recipeList.appendChild(recipeItem);
        });
    }

    displayRecipes();

    addRecipeForm.addEventListener('submit', function(event) {
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
            category
        };

        recipes.push(newRecipe);
        displayRecipes();
        addRecipeForm.reset();
    });

    recipeList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const recipeId = parseInt(event.target.dataset.id);
            const index = recipes.findIndex(recipe => recipe.id === recipeId);
            if (index !== -1) {
                recipes.splice(index, 1);
                displayRecipes();
            }
        }
    });
});
