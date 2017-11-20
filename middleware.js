//use module exports to expose middleware
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

module.exports = middleware;