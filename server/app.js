var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    path 	= require('path'); 




  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey the server finally works')
  })

    app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey the server finally works')
  })



// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening on port 5000')
})