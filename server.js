const express = require('express');
const recipeRouter = require('./data/recipe/recipe-router');

const server = express();

server.use(express.json());
server.use('/api', recipeRouter)

module.exports = server;