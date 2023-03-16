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
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  //   check if the admin already exists

  const companyExist = await Company.findOne({
    companyName: companyName,
  });
  if (companyExist) {
    res.status(400);
    throw new Error("Company already exist");
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
    res.status(400);
    throw new Error("Something wrong");
  }
});

// @desc    Get all users
// @route   GET /allUsers
// @access  Private

const getCompanies = asyncHandler(async (req, res) => {
  const company = await Company.find({});
  res.json(company);
});

module.exports = {
  createCompany,
  getCompanies,
};