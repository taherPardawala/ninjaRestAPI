var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//setup express app 
var app = express();

//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({
        error: err.message
    });
});

app.get('/', function(req, res){
    res.end();
});

// listen for requests 
app.listen(process.env.port || 4000, function(){
    console.log('listening for requests');
});