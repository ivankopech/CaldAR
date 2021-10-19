const express = require('express');
const router = express.Router();
const edificioControladora = require('../controllers/edificios');

router.get('/edificios', edificioControladora.getBuildings);
router.get('/edificios/buscar',edificioControladora.getBuildingByName);
router.get('/edificios/:id',edificioControladora.getBuildingById);
router.post('/edificios',edificioControladora.createBuilding);
router.delete('/edificios/:id', edificioControladora.deleteBuilding);
router.put('/edificios/:id',edificioControladora.updateBuilding);

module.exports = router;
