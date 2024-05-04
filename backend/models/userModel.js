const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  type: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  password: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  ordinaryPlaceOfWorking: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
    type: String,
  },
  mobile: {
    type: String,
  },
  aadhar: {
    type: String,
  },
  barNumber: {
    type: String,
  },
  pincode: {
    type: String,
  },
  gender: {
    type: String,
  },
});

// Remove unique constraint from username field
userSchema.index({ username: 1 }, { unique: false });

module.exports = mongoose.model("User", userSchema);
