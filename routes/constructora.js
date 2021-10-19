const express = require('express');
const router = express.Router();
const constructionCompany = require('../controllers/constructora');

router.get('/constructora', constructionCompany.getConstructionCompanies);
router.get('/constructora/buscar',constructionCompany.getConstructionCompaniesByName);
router.get('/constructora/:id',constructionCompany.getConstructionCompaniesById);
router.post('/constructora',constructionCompany.addConstructionCompany);
router.delete('/constructora/:id', constructionCompany.deleteConstructionCompanies);
router.put('/constructora/:id',constructionCompany.updateConstructionCompanies);

module.exports = router;
