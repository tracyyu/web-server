var express = require('express');
var app = express();
var PORT = 3000;

//specify middleware up top
var middleware = required('./middleware.js');

//adding app use middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send("About Us");
});

app.use(express.static(__dirname + '/public'));

app.listen(3000,function(){
	console.log('Express server started on ' + PORT + '!');
});