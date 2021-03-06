var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

//specify middleware up top
var middleware = require('./middleware.js');

//adding app use middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send("About Us");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
	console.log('Express server started on ' + PORT + '!');
});