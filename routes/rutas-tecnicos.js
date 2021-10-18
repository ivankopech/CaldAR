const express = require('express');
const router = express.Router();
const tecnicosControladora = require('./controllers/controladora-tecnicos.js.js.js');

router.get('/tecnicos', tecnicosControladora.obtenerTecnicos);
router.get('/tecnicos/buscar',tecnicosControladora.obtenerTecnicosPorApellido);
router.get('/tecnicos/:id',tecnicosControladora.obtenerTecnicoPorID);
router.post('/tecnicos',tecnicosControladora.crearTecnico);
router.delete('/tecnicos/:id', tecnicosControladora.eliminarTecnico);
router.put('/tecnicos/:id',tecnicosControladora.actualizarTecnicos);

module.exports = router;