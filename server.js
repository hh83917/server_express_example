var http = require('http');
var stuff = require('node-day-one');
var resources = stuff.resources;

console.log(resources);

var server = http.createServer();




var handleRequest = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if(req.method === 'GET') {
      res.statusCode = 200;
      res.end(JSON.stringify(resources));
  }
};


server
  .on('request', handleRequest)
  .listen(9001, function(e) {
    if (e) return console.error(e);
    console.log('Now lsitening on port:', 9001);
  });
