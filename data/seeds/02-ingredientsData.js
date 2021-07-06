
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'cup of butter', quantity: 0.5},
    {name: 'cup of sugar', quantity: 0.5},
    {name: 'egg', quantity: 2},
    {name: 'cup of flour', quantity: 0.75},
    {name: 'teaspoon of baking soda', quantity: 0.5},
    {name: 'teaspoon of baking powder', quantity: 1},
    {name: 'teaspoon of vanilla extract', quantity: 2},
    {name: 'cup of milk', quantity: 0.5},
    {name: 'tablespoon of milk', quantity: 3},
    {name: 'royal icing', quantity: 1},
    {name: 'large egg white', quantity: 2},
    {name: 'cup of powdered sugar', quantity: 3},
    {name: 'teaspoon of lemon juice', quantity: 1},
    {name: 'teaspoon of brown sugar', quantity: 1},
    {name: 'cup of strong coffee', quantity: 0.25},
    {name: 'cup of pumpkin puree', quantity: 0.25},
    {name: 'teaspoon of ground cinnamon', quantity: 0.5},
    {name: 'teaspoon of ground clove', quantity: 0.25},
    {name: 'teaspoon of ground ginger', quantity: 0.25},
    {name: 'cup of coffee ice cream', quantity: 3},
    {name: 'cup of vanilla ice cream', quantity: 4},
    {name: 'tablespoon of brown sugar', quantity: 1}
  ]);
};
