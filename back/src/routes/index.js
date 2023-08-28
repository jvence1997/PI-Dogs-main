const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const dogs = require('./routerDogs.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




router.use('/', dogs);


module.exports = router;
