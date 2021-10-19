const express = require('express');
const router = express.Router();
const calderasControladora = require('../controladora/controladora-calderas');

router.get('/calderas', calderasControladora.obtenerCalderas);
router.get('/calderas/buscar',calderasControladora.obtenerCalderaPorTipo);
router.get('/calderas/:id',calderasControladora.obtenerCalderaPorID);
router.post('/calderas',calderasControladora.crearCalderas);
router.delete('/calderas/:id', calderasControladora.eliminarCaldera);
router.put('/calderas/:id',calderasControladora.actualizarCalderas);

module.exports = router;