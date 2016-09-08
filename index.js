var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var pg = require('pg');
var PORT = process.env.PORT;
var conString = process.env.ELEPHANTSQL_URL;
var userString = process.env.ELEPHANTSQL_URL_USER;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./'));
app.use('/static', express.static(__dirname + '/allTogether'));
// app.use(bodyParser());

app.get('*', function(request, response) {
  // console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});



app.listen(PORT, function(){
  console.log('listen on port:'+ PORT);
  console.log('server running');
});
