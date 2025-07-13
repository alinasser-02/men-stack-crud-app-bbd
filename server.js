const morgan = require("morgan");
const express = require("express");
const app = express();
const path = require('path')


// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')))


// GET /(home)
app.get('/' ,(req,res)=>
{
res.render('index.ejs')
})


// APP LISTENING
app.listen(3000, () => {
  console.log("Listening to PORT: 3000");
});
