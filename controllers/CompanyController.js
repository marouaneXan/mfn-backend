const asyncHandler = require("express-async-handler");
const Company = require("../models/Company");

// @desc    createCompany a new admin
// @route   POST /admin/register
// @access  Public

const createCompany = asyncHandler(async (req, res) => {
  const {
    companyName,
    phoneNumber,
    companyNumber,
    companyAddress,
    longitude,
    latitude
  } = req.body;

  //   check if any of the fields are empty
  if (
    !phoneNumber ||
    !companyName ||
    !companyNumber ||
    !companyAddress ||
    !longitude ||
    !latitude 
  ) {
    res.status(200).json({
        message : "all fields are required",
        data : req.body
    })
  }

  //   check if the admin already exists

  const companyExist = await Company.findOne({
    companyName: companyName,
  });
  if (companyExist) {
    res.status(400).json({
        message : "company exist"
    })
  }

  // create admin
  const company = await Company.create({
    companyName,
    phoneNumber,
    companyNumber,
    companyAddress,
    longitude,
    latitude
  });

  //   if admin created send success message
  if (company) {
    res.status(201).json({
      message: 'Company created successfully',
    });
  } else {
    res.status(400).json({
        message:'Something went wrong'
    });
  }
});

// @desc    Get all users
// @route   GET /allUsers
// @access  Private

const getCompanies = asyncHandler(async (req, res) => {
  const company = await Company.find({});
  res.json(company);
});

const searchCompany = asyncHandler(async (req, res) => {
  const companies = await Company.find({
    companyName:req.body.companyName
  });
  res.json(companies);
});

module.exports = {
  createCompany,
  getCompanies,
  searchCompany
};