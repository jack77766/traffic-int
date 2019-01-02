//APP IMPORTS
var express         = require('express'),
    app             = express()


app.use(express.static(__dirname + '/public'));



app.use("/assets",  express.static(__dirname + '/assets'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})


app.listen(3000, 'localhost', function() {
    console.log("mirror server started!"); 
 });