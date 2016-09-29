var express = require('express'); //to fetch the node module

var app = express();

app.use(express.static('public'));

app.listen('6767', function(){
    console.log('server running');
});