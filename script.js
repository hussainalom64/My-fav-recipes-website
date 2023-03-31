// Array of recipes
const recipes = [
  {
    id: 1,
    name: 'Avocado Toast',
    category: 'breakfast',
    ingredients: ['1 slice of bread', '1 ripe avocado', '1/4 tsp salt', '1/4 tsp black pepper'],
    instructions: 'Toast the bread. While the bread is toasting, cut the avocado in half and remove the pit. Scoop out the avocado into a small bowl and mash with a fork. Add salt and pepper to taste. Spread the mashed avocado onto the toasted bread. Enjoy!',
    image: 'https://images.unsplash.com/photo-1596529346157-331b2cc2c276?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2FkbyUyMHRvYXN0JTIwZmxhc2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
  },

  {
    id: 2,
    name: 'Caprese Salad',
    category: 'lunch',
    ingredients: ['2 large ripe tomatoes', '8 oz fresh mozzarella', '1/4 cup fresh basil', '2 tbsp olive oil', '1 tbsp balsamic vinegar', 'Salt and pepper to taste'],
    instructions: 'Slice the tomatoes and mozzarella and arrange them in a circular pattern on a plate. Chop the fresh basil and sprinkle it over the top. Drizzle olive oil and balsamic vinegar over the salad. Add salt and pepper to taste. Enjoy!',
    image: 'https://images.unsplash.com/photo-1587563852972-2ee2be43ebfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwcmVzZSUyMHNhbGFkJTIwc2FsYWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
  },

  {
    id: 3,
    name: 'Spaghetti Bolognese',
    category: 'dinner',
    ingredients: ['1 lb spaghetti', '1 lb ground beef', '1 can of diced tomatoes', '1/2 onion, chopped', '2 cloves garlic, minced', '1 tsp dried oregano', '1/4 tsp salt', '1/4 tsp black pepper'],
    instructions: 'Cook spaghetti according to package instructions. While the spaghetti is cooking, brown the ground beef in a large skillet over medium-high heat. Add chopped onion and minced garlic and cook until onion is translucent. Add diced tomatoes, oregano, salt, and black pepper. Reduce heat and simmer for 10 minutes. Serve over cooked spaghetti. Enjoy!',
    image: 'https://images.unsplash.com/photo-1522698518547-672c6be0b7d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },

  {
    id: 4,
    name: 'Chocolate Chip Cookies',
    category: 'dessert',
    ingredients: ['2 1/4 cups all-purpose flour', '1 tsp baking soda', '1 tsp salt', '1 cup unsalted butter, softened', '3/4 cup white sugar', '3/4 cup brown sugar', '2 large eggs', '2 tsp vanilla extract', '2 cups semisweet chocolate chips'],
    instructions: 'Preheat oven to 375°F. In a medium bowl, whisk together flour, baking soda, and salt. In a large bowl, beat together butter, white sugar, and brown sugar until creamy. Beat in eggs, one at a time, and then stir in vanilla extract. Gradually beat in flour mixture. Stir in chocolate chips. Drop tablespoon-sized balls of dough onto an ungreased baking sheet. Bake for 8-10 minutes, or until golden brown. Let cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.',
    image: 'https://images.unsplash.com/photo-1621441174114-1877c481f77b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
  }
];

const recipeContainer = document.getElementById('recipe-container');

function showRecipes(category) {
  // Filter the recipes array based on the category
  const filteredRecipes = recipes.filter(recipe => recipe.category === category);

  // Create HTML for each recipe card
  const recipeCardsHTML = filteredRecipes.map(recipe => {
    return `
      <div class="recipe-card">
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>Ingredients</h3>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Instructions</h3>
        <p>${recipe.instructions}</p>
      </div>
    `;
  }).join('');

  // Update the recipe container with the HTML
  recipeContainer.innerHTML = recipeCardsHTML;
}

// Show all recipes by default
showRecipes('');

// Add event listeners to category links
const categoryLinks = document.querySelectorAll('nav a');
categoryLinks.forEach(link => {
  link.addEventListener('click', () => {
    const category = link.id;
    showRecipes(category);
  });
});

