const express = require('express');
const router = express.Router();
const constructoraControladora = require('../controladora/constructora-controladora');

router.get('/constructoras', constructionsController.obtenerContructoras);
router.get('/constructoras/buscar',constructionsController.obtenerContructorasPorNombre);
router.get('/constructoras/:id',constructionsController.obtenerContructorasPorID);
router.post('/constructoras',constructionsController.crearConstructora);
router.delete('/constructoras/:id', constructionsController.eliminarContructora);
router.put('/constructoras/:id',constructionsController.actualizarContructoras);

module.exports = router;
