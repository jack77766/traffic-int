//APP IMPORTS
var express         = require('express'),
    app             = express(),
    dotenv          = require('dotenv').config()


// app.use(express.static(__dirname + '/public'));
app.use("/assets",  express.static(__dirname + '/assets'));
// app.use(express.static('assets/'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
   //  res.sendFile(__dirname + '/index.html');
   res.render('index');
})

app.get('/casino', function(req, res) {
   res.render('casino');
})

app.get('/airport', function(req, res) {
   res.render('airport');
})

app.get('/stadium', function(req, res) {
   res.render('stadium');
})
app.get('/traffic', function(req, res) {
   res.render('traffic');
})

app.get('/retail', function(req, res) {
   res.render('retail');
})

app.get('/product', function(req, res) {
   res.render('product');
})

app.get('/TI-401M', function(req, res) {
   res.render('TI-401M');
})



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Traffic-Int server started!"); 
 });