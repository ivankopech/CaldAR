const express = require('express');
const router = express.Router();
const boilerController = require('../controllers/caldera');

router.get('/calderas', boilerController.getBoilers);
router.get('/calderas/buscar',boilerController.getBoilersByType);
router.get('/calderas/:id',boilerController.getBoilersById);
router.post('/calderas',boilerController.addBoiler);
router.delete('/calderas/:id', boilerController.deleteBoiler);
router.put('/calderas/:id',boilerController.updateBoilers);

module.exports = router;