const express = require('express');
const router = express.Router();
const constructoraControladora = require('../controladora/constructora-controladora.js');

router.get('/constructoras', constructoraControladora.obtenerContructoras);
router.get('/constructoras/buscar',constructoraControladora.obtenerContructorasPorNombre);
router.get('/constructoras/:id',constructoraControladora.obtenerContructorasPorID);
router.post('/constructoras',constructoraControladora.crearConstructora);
router.delete('/constructoras/:id', constructoraControladora.eliminarContructora);
router.put('/constructoras/:id',constructoraControladora.actualizarContructoras);

module.exports = router;
