const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    description: String,
    location: String,
    phoneNumber: String,
    website: String,
    isVerified: {
      type: Boolean,
      defult: false,
    },
  },
  { Timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
module.exports = Business;
