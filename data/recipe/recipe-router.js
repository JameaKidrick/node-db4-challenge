const express = require('express');

const recipeBook = require('./recipe-model');

const router = express.Router();

// GET /api/recipes/: all recipes (without details about ingredients or steps)
router.get('/recipes', (req, res) => {
  recipeBook.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

// GET /api/recipes/:id/shoppingList: a list of ingredients and quantities for a single recipe
router.get('/recipes/:id/shoppingList', (req, res) => {
  recipeBook.getShoppingList(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

// GET /api/recipes/:id/instructions: a correctly ordered list of how to prepare a single recipe
router.get('/recipes/:id/instructions', (req, res) => {
  recipeBook.getInstructions(req.params.id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

// GET /api/ingredients/:id/recipes: all recipes in the system that utilize a single ingredient
router.get('/ingredients/:id/recipes', (req, res) => {
  recipeBook.getRecipeByIngredient(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

module.exports = router;