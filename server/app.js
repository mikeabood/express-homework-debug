var express = require('express'),
    app     = express(),
    path	= require('path'),
    server  = require('http').createServer(app);

    app.use(express.static(path.join(__dirname, 'public')));
	app.set('views',path.join(__dirname,'views'))
    app.set('view engine', 'hbs');
    





  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey the server finally works')
  })

    app.get('/apple', function(req, res){
	    res.render('apple', {})
   })
	app.get('/orange', function(req, res){	
    	res.render('orange', {})
 })

    app.get('/lemon', function(req, res){
	    res.send("ooo that's tart")
    //send, sends text
  })

     app.get('/jay',function(req,res){
    	var json = {
    		"what": "is up",
    		"sky": true
}
    		res.json(json)
    	
    })

    app.get('/son',function(req,res){
    	var json = {
    		"genre": "classical",
    		"instrument": "violin",
}
    		res.json(json)
    	
    })


// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening on port 5000')
})