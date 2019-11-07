
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', table => {
      table.increments();

      table.string('name', 255).notNullable()
    })

    .createTable('ingredients', table => {
      table.increments();

      table.string('name', 255).notNullable()
      table.integer('quantity').notNullable()
    })

    .createTable('recipe_ingredients', table => {
      table.increments();

      table
        .integer('RecipeId')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

      table
        .integer('IngredientId')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
};
