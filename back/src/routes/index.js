const { Router } = require('express');
// Importar todos los routers;
const DogsRouter = require('./DogsRouter')
const TemperamentsRouter = require('./TemperamentsRouter')

const router = Router();

router.use('/dogs', DogsRouter);
router.use('/temperaments', TemperamentsRouter);


module.exports = router;
