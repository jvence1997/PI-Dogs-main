const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds/?'
const { API_KEY } = process.env

module.exports = {

    getAllDogs() {
        let dogs = axios.get(`${URL}api_key=${API_KEY}`)
        .map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                height: dog.height,
                weight: dog.weight,
                life_span: dog.life_span,
                image: dog.image.url,

            }
        }) 

        return dogs;
    }



}