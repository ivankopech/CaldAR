const express = require('express');
const router = express.Router();
const tecnicosControladora = require('../controladora/controladora-tecnicos.js');

router.get('/constructoras', tecnicosControladora.obtenerTecnicos);
router.get('/constructoras/buscar',tecnicosControladora.obtenerTecnicosPorApellido);
router.get('/constructoras/:id',tecnicosControladora.obtenerTecnicoPorID);
router.post('/constructoras',tecnicosControladora.crearTecnico);
router.delete('/constructoras/:id', tecnicosControladora.eliminarTecnico);
router.put('/constructoras/:id',tecnicosControladora.actualizarTecnicos);

module.exports = router;


