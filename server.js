
var express = require('express');
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'lenin.veluru7@gmail.com',
    pass: 'lenin@veluru'
  }
}, {
  from: 'travaler <lenin.veluru7@gmail.com>'
});


app.get('/postEmail',function(req,res){
  console.log('REQ',req)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  var message = {
    to: '"'+req.query.fName +''+ req.query.lName+'"<'+ req.query.email +'>',
    subject: 'Booking Confirmation',
    html: '<h1>Thank you</h1>'+
    '<pre>'+req.query.fName +' '+ req.query.lName +'('+ req.query.mobile +')'+
    ' will depart on '+ req.query.startdt +
    ' and return on '+  req.query.returndt +
    'from: '+ req.query.from +
    ' to '+ req.query.to +
    ' <h3>Your Booking is confirmed</h3>'
  };


  transporter.sendMail(message, function (error, info) {
    if (error) {
      return;
    }
    console.log('Message sent successfully!');
  });

  res.end('done');
});

app.listen(5000,function(){
	console.log('app listening the port 5000');
});
