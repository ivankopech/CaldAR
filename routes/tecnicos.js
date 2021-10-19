const express = require('express');
const router = express.Router();

const tecnicosControladora = require('../controllers/tecnicos');


router.get('/tecnicos', tecnicosControladora.getTechnicians);
router.get('/tecnicos/buscar',tecnicosControladora.getTechnicianBySurname);
router.get('/tecnicos/:id',tecnicosControladora.getTechnicianById);
router.post('/tecnicos',tecnicosControladora.createTechnician);
router.delete('/tecnicos/:id', tecnicosControladora.deleteTechnician);
router.put('/tecnicos/:id',tecnicosControladora.updateTechnician);


module.exports = router;
