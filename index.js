const express = require('express');
const app =express();
const port =8000;
const expressLayouts =require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts);


app.use('layout extractStyles',true);
app.use('layout extractScripts',true);
//use router
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port, function(err){
  if (err){
      console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
