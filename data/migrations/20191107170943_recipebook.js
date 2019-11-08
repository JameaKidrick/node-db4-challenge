
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', table => {
      table.increments();

      table.string('name', 255).notNullable()
    })

    .createTable('instructions', table => {
      table.increments();

      table.string('instructions', 255).notNullable()

      table.integer('step').notNullable()

      table
        .integer('RecipeId')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    .createTable('ingredients', table => {
      table.increments();

      table.string('name', 255).notNullable()
      table.float('quantity', 128).notNullable()
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
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
};
