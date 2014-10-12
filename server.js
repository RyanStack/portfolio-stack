var express = require('express');
var http = require('http');
var app = express();
var server = require('http').createServer(app);
var bodyParser   = require('body-parser');
var port;

app.use(express.static("public", __dirname + "/public"))
app.use(bodyParser.json());


app.get('/', function(request, response) {
  response.sendfile(__dirname + '/index.html')
})


port = process.env.PORT || 5000;

server.listen(port, function () {
    console.log('OOTD server listening on port 5000');
});