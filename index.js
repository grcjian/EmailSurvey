const express = require('express');
require('./services/passport');


const app = express();  //generate an object of express

require('./routes/authRoutes')(app);

//create a route handler, root route
/*app.get('/',(req, res)=>{
  res.send({ bye: 'buddy'});
});
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT);
//localhost:5000
