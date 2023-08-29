const axios = require('axios');
const {API_KEY} = process.env;
const {Dog} = require('../../../db');

const cleanArray = (array) =>
    array.map((elem) => {
        return {
            id: elem.id,
            name: elem.name,
            image: `https://cdn2.thedogapi.com/images/${elem.reference_image_id}.jpg`,
            minHeight: parseInt(elem.height.metric.slice(0, 2).trim()),
            maxHeight: parseInt(elem.height.metric.slice(4).trim()),
            minWeight: parseInt(elem.weight.metric.slice(0, 2).trim()),
            maxWeight: parseInt(elem.weight.metric.slice(4).trim()),
            life_span: elem.life_span,
            created: false
        }
    });

const getAllDogs = async () => {
    const databaseDogs = await Dog.findAll();
    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)).data
    const apiDogs = cleanArray(apiDogsRaw);

    return [...databaseDogs, ...apiDogs];
};


module.exports = {getAllDogs, cleanArray};