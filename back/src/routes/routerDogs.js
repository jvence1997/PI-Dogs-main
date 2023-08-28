const { Router } = require('express');
const { getAllDogs } = require('../controllers/getAllDogs');
const dogs = Router();

dogs.get('/dogs', (req, res) => { 
try {
    const { data } = req.body;
    if(data) {
        return res.status(200).json(getAllDogs)
    } else {
        throw new Error('No dogs found')
    }
} catch (error) {
    res.status(500).json({ message: error.message })
}
});

module.exports = dogs;