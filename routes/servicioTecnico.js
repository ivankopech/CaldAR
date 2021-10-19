const express = require('express');
const router = express.Router();

const servicioTecnicoControladora = require('../controllers/servicioTecnico');



router.get('/servicioTecnico', servicioTecnicoControladora.getServices);
router.get('/servicioTecnico/buscar',servicioTecnicoControladora.getServiceByName);
router.get('/servicioTecnico/:id',servicioTecnicoControladora.getServiceByID);
router.post('/servicioTecnico',servicioTecnicoControladora.createService);
router.delete('/servicioTecnico/:id', servicioTecnicoControladora.deleteService);
router.put('/servicioTecnico/:id',servicioTecnicoControladora.udateService);

module.exports = router;

