var express = require('express');
var morgan = require('morgan');

var port = process.env.PORT || 3000;
var app = express();
var counter = 0;

app.use(morgan('dev'));

app.get('/', function(req, res){
    res.json({
        count: counter
    });
});

app.put('/inc', function(req, res){
    counter++;
    res.status(204).end();
});

app.put('/dec', function(req, res){
    counter--;
    res.status(204).end();
});

app.listen(port);
console.log("counter is listening on: " + port + "...");
