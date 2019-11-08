// getInstructions(recipe_id): 

const db = require('../../db-config');

module.exports={
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipeByIngredient
}

/*
should return a list of all recipes in the database.

SQL Query:

SELECT * FROM recipe;
*/
function getRecipes(){
  return db('recipe');
}

/*
should return a list of all ingredients and quantities for a given recipe

SQL Query:

SELECT recipe.name AS 'Recipe', ingredients.name AS 'Ingredients', ingredients.quantity AS 'Quantity' FROM recipe_ingredients
JOIN ingredients ON ingredients.id = recipe_ingredients.IngredientId
JOIN recipe ON recipe.id = recipe_ingredients.RecipeId
WHERE recipe.name = 'Cupcakes';
*/
function getShoppingList(recipe_id){
  return db('recipe_ingredients')
    .select('ingredients.name', 'ingredients.quantity')
    .join('ingredients', 'ingredients.id', '=', 'recipe_ingredients.IngredientId')
    .join('recipe', 'recipe.id', '=', 'recipe_ingredients.RecipeId')
    .where({'recipe.id': recipe_id})
}

/*
should return a list of step by step instructions for preparing a recipe

SQL Query:

SELECT recipe.name AS 'Recipe', instructions.step AS 'Step', instructions.instructions AS 'Instructions' FROM instructions
JOIN recipe ON instructions.RecipeId = recipe.id
WHERE recipe.name = 'Cupcakes';
*/
function getInstructions(recipe_id){
  return db('instructions')
    .select('instructions.step', 'instructions.instructions')
    .join('recipe', 'instructions.RecipeId', '=', 'recipe.id')
    .where({'recipe.id': recipe_id})
}

/*
all recipes in the system that utilize a single ingredient

SQL Query:

SELECT recipe.name AS 'Recipe' FROM recipe_ingredients
JOIN ingredients ON ingredients.id = recipe_ingredients.IngredientId
JOIN recipe ON RECIPE.id = recipe_ingredients.RecipeId
WHERE ingredients.id = 3;
*/
function getRecipeByIngredient(ingredient_id){
  return db('recipe_ingredients')
    .select('recipe.name as recipe_name')
    .join('ingredients', 'ingredients.id', '=', 'recipe_ingredients.IngredientId')
    .join('recipe', 'recipe.id', '=', 'recipe_ingredients.RecipeId')
    .where({'ingredients.id': ingredient_id})
}