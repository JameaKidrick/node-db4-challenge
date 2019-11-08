
exports.seed = function(knex) {
  return knex('recipe').insert([
    {name: 'Cupcakes'}, // 1
    {name: 'Pumpkin Coffee Milkshake '}, // 2
    {name: 'Cinnamon Milk Shake'} // 3
  ]);
};
