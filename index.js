var express = require('express'); //to fetch the node module

var app = express();
var mongoose = require('mongoose');
var travel = mongoose.model('travel:', {
	firstName: String,
	lastName: String,
	email:String,
	mobileNumber: Number,
	form: String,
	destination: String,
	date: Date
})

app.use(express.static('public'));

/*app.listen('6767', function(){
    console.log('server running');
});*/


mongoose.connect('mongodb://travel-database:travel-database@ds053146.mlab.com:53146/lenin-database', {},function(){
 console.log('connet to data base')
 
 app.listen('6767',function(){
 console.log('is server running')
})
})

app.post('/', function(req, res){

travel.create({
	firstName: request.body.text.firstName,
	lastName: request.body.text.lastName,
	email:request.body.text.email,
	mobileNumber: request.body.text.mobileNumber,
	form: request.body.text.form,
	destination: request.body.text.destination,
	date: request.body.text.data
})
})
