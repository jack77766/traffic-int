//APP IMPORTS
var express         = require('express'),
    app             = express()


app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

app.use("/assets",  express.static(__dirname + '/assets'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})


app.listen(port, ip, function() {
    console.log("mirror server started!"); 
 });