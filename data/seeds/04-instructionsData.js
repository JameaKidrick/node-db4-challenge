
exports.seed = function(knex) {
  return knex('instructions').insert([
    {step: 1, instructions: 'Take everything you need out of the fridge in time to get to room temperature - and this makes a huge difference to the lightness of the cupcakes later - and preheat the oven to 400 degrees F.', recipeId: 1},
    {step: 2, instructions: 'Put all of the ingredients for the cupcakes except for the milk into a food processor and blitz until smooth. Pulse while adding the milk down the funnel, to make a smooth dropping consistency.', recipeId: 1},
    {step: 3, instructions: 'Divide the mixture between a 12-bun muffin tin lined with muffin papers, and bake in the oven for 15 to 20 minutes. They should have risen and be golden on top. Let them cool a little in their tins on a rack, and then take them carefully out of the tin to cool in their papers, still on the wire rack.', recipeId: 1},
    {step: 4, instructions: 'Ice with Royal Icing.', recipeId: 1},
    {step: 5, instructions: `Royal Icing: Combine the egg whites and confectioners' sugar in a medium-size mixing bowl and whip with an electric mixer on medium speed until opaque and shiny, about 5 minutes. Whisk in the lemon juice, this will thin out the icing. Beat for another couple of minutes until you reach the right spreading consistency for the cupcakes.`, recipeId: 1},
    {step: 1, instructions: 'Stir brown sugar into coffee to dissolve. Let cool.', recipeId: 2},
    {step: 2, instructions: 'Add coffee mixture, milk, pumpkin, cinnamon, cloves, and ginger to the jar of a blender. Add ice cream and pulse until smooth. Divide between serving glasses and garnish with a few coffee beans if desired.', recipeId: 2},
    {step: 1, instructions: 'Place all ingredients in blender and blend until smooth.', recipeId: 3},
    {step: 2, instructions: 'Pour into individual cups and top with an additional sprinkle of ground cinnamon if desired.', recipeId: 3}
  ]);
};
