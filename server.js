const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require('path')


// CONTROLLERS
const businessController = require('./controllers/businessController')

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
console.log(`Conected to MongoDB${mongoose.connection.name}`);
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}))

// GET / (home)
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// ROUTES
app.use('/businesses', businessController)



// APP LISTENING
app.listen(3000, () => {
  console.log("Listening to PORT: 3000");
});
