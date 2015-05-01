'use strict';

var express = require('express');
//'require' says go get whatever from package.json
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/week_3'));

app.get('/about', function(req, res) {
  res.status(200).sendFile(__dirname + 'vote_tracker/Desktop/Codefellows/CD29/projects/week_3/about.html');

});

app.get('/secret', function(req, res) {//translates to the URL localhost/3000/greet
  //req is request and res is response
  console.log('Hate to break the news, but he is not the father.');
  res.status(200).send('<h1>The test results are in - you are the father!.</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + 'vote_tracker/Desktop/Codefellows/CD29/projects/week_3/404.html');
});

app.listen(app.get('port'), function(){
  console.log('More cats more cats!');
});

