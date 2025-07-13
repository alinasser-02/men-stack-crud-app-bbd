const morgan = require("morgan");
const express = require("express");

const app = express();

// GET /(home)
app.get('/' ,(req,res)=>
{
res.send('<h1>hello world!</h1>')
})

app.listen(3000, () => {
  console.log("Listening to PORT: 3000");
});
