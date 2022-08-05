//first route handler
const express = require('express');
const app = express();  //generate an object of express

//create a route handler, root route
app.get('/',(req, res)=>{
  res.send({hi: 'there'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);
//localhost:5000
