const axios = require('axios');
const {API_KEY} = process.env;
const {Dog} = require('../../../db');
const {cleanArray} = require('./getAllDogs');

//tipo de id
//id que no exista
 const getDogsById = async (id, source) => {
   const dog = 
   source === "api"
   ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`)).data
    : await Dog.findByPk(id);
    return cleanArray([dog]);
 };

 module.exports = getDogsById;