const express = require('express');
const {
  createCompany, getCompanies
} = require('../controllers/CompanyController');
const router = express();
router.post('/create', createCompany).get('/',getCompanies)
module.exports = router;