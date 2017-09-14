var express=require('express');
var app= express();
var port=3000;
/*
app.get('/',function(req,res){
	res.send('Hello Express');
});
*/

var middleware= require('./middleware.js');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication); //application level middleware

//about About Us
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About Us!!');
});
app.use(express.static(__dirname+'/public'));
//console.log(__dirname);
app.listen(port, function(){
	console.log('Express Server Started on '+port);
});