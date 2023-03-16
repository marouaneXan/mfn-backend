const express = require('express');
const {
  createCompany, getCompanies, searchCompany
} = require('../controllers/CompanyController');
const router = express();
router.post('/create', createCompany).get('/',getCompanies).get('/find',searchCompany)
module.exports = router;