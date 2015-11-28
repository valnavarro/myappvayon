
// BASE SETUP
// ======================================
// CALL THE PACKAGES --------------------
var express    	= require('express');		// call express
var app        	= express(); 				// define our app using express
var path 	   	= require('path');

// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/www'));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/www/index.html'));
});

// START THE SERVER
// ====================================
// start the server
app.listen(8100);
console.log('8100 is the magic port!');
 


