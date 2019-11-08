
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {RecipeId: 1, IngredientId: 1},
    {RecipeId: 1, IngredientId: 2},
    {RecipeId: 1, IngredientId: 3},
    {RecipeId: 1, IngredientId: 4},
    {RecipeId: 1, IngredientId: 5},
    {RecipeId: 1, IngredientId: 6},
    {RecipeId: 1, IngredientId: 7},
    {RecipeId: 2, IngredientId: 8},
    {RecipeId: 1, IngredientId: 9},
    {RecipeId: 1, IngredientId: 10},
    {RecipeId: 1, IngredientId: 11},
    {RecipeId: 1, IngredientId: 12},
    {RecipeId: 1, IngredientId: 13},
    {RecipeId: 2, IngredientId: 14},
    {RecipeId: 2, IngredientId: 15},
    {RecipeId: 2, IngredientId: 16},
    {RecipeId: 2, IngredientId: 17},
    {RecipeId: 2, IngredientId: 18},
    {RecipeId: 2, IngredientId: 19},
    {RecipeId: 2, IngredientId: 20},
    {RecipeId: 3, IngredientId: 21},
    {RecipeId: 3, IngredientId: 8},
    {RecipeId: 3, IngredientId: 22},
    {RecipeId: 3, IngredientId: 7},
    {RecipeId: 3, IngredientId: 17}
  ]);
};
