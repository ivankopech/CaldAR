const express = require('express');
const router = express.Router();
const servicioTecnicoControladora = require('../controladora/controladora-tecnicos.js');


router.get('/servicioTecnico', servicioTecnicoControladora.obtenerTecnicos);
router.get('/servicioTecnico/buscar',servicioTecnicoControladora.obtenerTecnicosPorApellido);
router.get('/servicioTecnico/:id',servicioTecnicoControladora.obtenerTecnicoPorID);
router.post('/servicioTecnico',servicioTecnicoControladora.crearTecnico);
router.delete('/servicioTecnico/:id', servicioTecnicoControladora.eliminarTecnico);
router.put('/servicioTecnico/:id',servicioTecnicoControladora.actualizarTecnicos);

module.exports = router;

