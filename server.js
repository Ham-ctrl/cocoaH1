const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
//const  = require('http');
const path = require('path');


//Database
const packDB = require('./database/dbform');
packDB();
const packModel = require('./modelz/model');
packModel();

const app = express();

app.use(express.json());

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'aboutIndexin' }));  //Here is displaying BUT when there is diff anada RO
app.set('view engine', 'handlebars');

//Handlebars the separated method

//Body Parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//app.get('/', (req,res) => res.render('message', {layout:'mainTwo'})); // NOTE not cancel it require callback fxn;

// cocoa routes
app.use('/routing', require('./routes/routerz'))

const PORT = process.env.PORT || 8000;

//Geolocation API;
//app.post

app.listen(PORT, console.log('Server started on port ${PORT}'));