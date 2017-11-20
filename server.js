var express = require('express');
var app = express();
var PORT = 3000;

//specify middleware up top
var middleware = {
	//routelevel middleware
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	//application level middleware
	logger: function(req, res, next){
		console.log("request: " + new Date().toString + " " + req.method + " " + req.originalURL );
		next();
	}
};

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