const express = require('express');
const router = express.Router();
const servicioTecnicoControladora = require('../controladora/controladora-servicioTecnico.js');


router.get('/servicioTecnico', servicioTecnicoControladora.obtenerServicioTecnico);
router.get('/servicioTecnico/buscar',servicioTecnicoControladora.obtenerServicioTecnicoPorTecnico);
router.get('/servicioTecnico/:id',servicioTecnicoControladora.obtenerServicioTecnicoPorID);
router.post('/servicioTecnico',servicioTecnicoControladora.crearServiciosTecnicos);
router.delete('/servicioTecnico/:id', servicioTecnicoControladora.eliminarServicioTecnico);
router.put('/servicioTecnico/:id',servicioTecnicoControladora.actualizarServicioTecnicos);

module.exports = router;

