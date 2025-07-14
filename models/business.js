const { name } = require("ejs");
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const businessSchema = new mongoose.schema(
  {
    name: String,
    category: String,
    description: String,
    location: String,
    phoneNumber: String,
    website: String,
    isVerfied: {
      type: Boolean,
      defult: false,
    },
  },
  { Timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
module.export = Business;
