const express = require('express');
const router = express.Router();
const edificioControladora = require('../controladora/controladora-edificios.js');

router.get('/edificios', edificioControladora.obtenerEdificios);
router.get('/edificios/buscar',edificioControladora.obtenerEdificioPorNombre);
router.get('/edificios/:id',edificioControladora.obtenerEdificioPorID);
router.post('/edificios',edificioControladora.crearEdificio);
router.delete('/edificios/:id', edificioControladora.eliminarEdificio);
router.put('/edificios/:id',edificioControladora.actualizarEdificios);

module.exports = router;
