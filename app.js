//app.js

var express = require('express'); //call express
var app = express(); //define the app using express
var path = require('path');
// var multer = require('multer');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080; //set the port 

var routes = require('./routes');
var home = require('./routes/home');
var contact = require('./routes/contact');
var uploads = require('./routes/uploads');
// var info = require('./routes/info');

// var upload = multer({ dest: './uploads/' });
// app.use(multer({
//     dest: './uploads/'
// }));

//CONFIG
//================================================
// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Tell express where it can find the templates
app.set('views', __dirname + '/views');
// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer({
//   dest: './public/images/uploads/2'
// }));

// ROUTES
// ==============================================

app.get('/about', function(req, res) {
    res.send('This is the about page of the node app');  
});

app.get('/', routes.index); //there must be an index.js for this call to work
//The following routes are loaded using the router middleware
app.use('/home', home.home); 
app.use('/contact', contact);
// app.use('/info', info.infopage);
app.use('/uploads', uploads);


// START THE SERVER
// ==============================================

console.log('Your application is running on http://localhost:' + port);
app.listen(port);

module.exports = app;