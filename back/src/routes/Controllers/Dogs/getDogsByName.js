const {cleanArray} = require('./getAllDogs');
const {Dog} = require('../../../db');
const axios = require('axios');
const {API_KEY} = process.env;
const { Op } = require('sequelize');

//busco si coincide el name en mi bd
const getDogsByName = async (name) => {
    const lowerCase = name.toLowerCase();
    const databaseDogs = await Dog.findOne({
        where: {
            name: {
                [Op.iLike]: `%${lowerCase}%`
              }
        }
    })


    const apiDogsRaw = (
    await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data
    const apiDogs = cleanArray(apiDogsRaw);
    const filteredApi = apiDogs.filter((dog) => dog.name.toLowerCase().includes(lowerCase));

    if (databaseDogs || filteredApi.length > 0) {
        return [...filteredApi, databaseDogs];
    } else {
        throw new Error('No se encontraron perros con el nombre especificado.');
    }
};


module.exports = getDogsByName;