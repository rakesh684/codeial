//first step- to create our server and run on port
//second step -to create different folder controller,models and views for MVC structure
//third step- we created routes
       // index.js created- it centralised all part  or all other routes it telles which path should go whhich file
       //for users it will go user.js and for '/' it will go to controller(homeController)
// controller-it is basically a home controller and collection of multiple function
       //which are exported and those funcion are called action
       //home _controller-has exported home function which renders a view called home

//partials-whenever we have long html code or we have some redundant part of our html code we put them out into different files  they are called partials
//naming convension is placed _ before name of the file and in ejs formate

//layouts- they are the common design which is inherited by every page as they required

//static folder -we placed it in assets folder

//congig- for setting our database
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

//to use database place in it as require
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout where style are put
//into head and scripts are puts in bottom of body of layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
//for look up views we go view folder where different views are placed
//our vies are ejs file which are rendered to browser as html file
app.set('views', './views');

//trial server on port 
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
