const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path'); 

const app = express();

app.use('/media', express.static( path.join( __dirname, 'media') ) )

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);