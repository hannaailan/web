const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const recipeContainer = document.getElementById('recipe-container');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Please enter an ingredient or recipe name.');
        return;
    }

    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=YOUR_API_KEY`);
        const data = await response.json();
        displayRecipes(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data. Please try again later.');
    }
});

function displayRecipes(recipes) {
    recipeContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>Ready in ${recipe.readyInMinutes} minutes</p>
            <p>Servings: ${recipe.servings}</p>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeContainer.appendChild(recipeElement);
    });
}
