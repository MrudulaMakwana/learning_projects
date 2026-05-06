let recipeList = document.querySelector('.recipeList');
let recipeDetails = document.querySelector('.recipeDetails');
let loader = document.querySelector('.loader');

async function fetchListOfRecipe() {
    try {
        loader.style.display = "block"; // Show loader
        const response = await fetch('https://dummyjson.com/recipes');
        const result = await response.json();

        if (result && result.recipes.length > 0) {
            displayRecipeList(result.recipes);
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
    } finally {
        loader.style.display = "none"; // Hide loader
    }
}

async function handleRecipeDetails(id) {
    try {
        loader.style.display = "block"; // Show loader
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const result = await response.json();

        if (result) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            displayRecipeDetailsData(result);
        }
    } catch (error) {
        console.error("Error fetching recipe details:", error);
    } finally {
        loader.style.display = "none"; // Hide loader
    }
}

function displayRecipeList(getRecipeList) {
    recipeList.innerHTML = ""; // Clear previous recipes

    getRecipeList.forEach(recipe => {
        let { name, id, image, cuisine, ingredients, mealType, rating } = recipe;

        const recipeItemWrapper = document.createElement('div');
        recipeItemWrapper.classList.add('recipeItem');

        const recipeImage = document.createElement('img');
        recipeImage.classList.add('recipeImage');
        recipeImage.src = image;
        recipeImage.alt = name;

        const recipeName = document.createElement('p');
        recipeName.classList.add('recipeName');
        recipeName.textContent = name;

        const recipeCuisine = document.createElement('p');
        recipeCuisine.classList.add('recipeCuisine');
        recipeCuisine.textContent = `Cuisine: ${cuisine}`;

        const recipeMealType = document.createElement('p');
        recipeMealType.classList.add('recipeMealtype');
        recipeMealType.textContent = `Meal Type: ${mealType}`;

        const recipeRating = document.createElement('p');
        recipeRating.classList.add('recipeRating');
        recipeRating.textContent = `Rating: ⭐ ${rating}`;

        const recipeIngredents = document.createElement('p');
        recipeIngredents.classList.add('recipeIngredents');
        recipeIngredents.textContent = `Ingredients: ${ingredients.join(', ')}`;

        const recipeDetailsButton = document.createElement('button');
        recipeDetailsButton.classList.add('recipeDetailsButton');
        recipeDetailsButton.textContent = 'View Details';
        recipeDetailsButton.addEventListener('click', () => handleRecipeDetails(id));

        // Append elements to recipe item wrapper
        recipeItemWrapper.appendChild(recipeImage);
        recipeItemWrapper.appendChild(recipeName);
        recipeItemWrapper.appendChild(recipeCuisine);
        recipeItemWrapper.appendChild(recipeMealType);
        recipeItemWrapper.appendChild(recipeRating);
        recipeItemWrapper.appendChild(recipeIngredents);
        recipeItemWrapper.appendChild(recipeDetailsButton);

        // Append to recipe list
        recipeList.appendChild(recipeItemWrapper);
    });
}

function displayRecipeDetailsData(recipe) {
    recipeDetails.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <p><strong>Meal Type:</strong> ${recipe.mealType}</p>
        <p><strong>Rating:</strong> ⭐ ${recipe.rating}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
    `;
}

// Fetch recipes on page load
fetchListOfRecipe();
