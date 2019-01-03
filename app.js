//APP IMPORTS
var express         = require('express'),
    app             = express(),
    dotenv          = require('dotenv').config()


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');



app.use("/assets",  express.static(__dirname + '/assets'));


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
   res.render('soon');
})
app.get('/children', function(req, res) {
   res.render('soon');
})

app.get('/retail', function(req, res) {
   res.render('retail');
})


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Traffic-Int server started!"); 
 });