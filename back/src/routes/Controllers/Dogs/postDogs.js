const {Dog} = require('../../../db');

const postDogs = async (name, minHeight, maxHeight, minWeight, maxWeight, life_span) => 
await Dog.create({name, minHeight, maxHeight, minWeight, maxWeight, life_span});


module.exports = postDogs;