const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please enter your company name"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    companyNumber: {
      type: String,
      required: [true, "Please enter your company number"],
    },
    companyAddress: {
      type: String,
      required: [true, "Please enter your company address"],
    },
    longitude: {
      type: String,
      required: [true, "Please choose your company on the map"],
    },
    latitude: {
      type: String,
      required: [true, "Please choose your company on the map"],
    },
  }
);

module.exports = mongoose.model("Company", companySchema)