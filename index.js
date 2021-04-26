const express = require('express');

let app = new express();

/*const requestListener = ((req,res) => {

    res.write("Hello World");
    res.end();

});

const server = http.createServer();

server.on('request',requestListener);


server.listen(1234, () => {

    console.log("Server is listening");

});*/


app.get("/", function(req,res){

    //res.send("Hello from Node Sample....");
    res.writeHead(200,{'content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/home.html','utf8');
    myReadStream.pipe(res);

});

let port=12345;
app.listen(port, function(){
    console.log("Server listening at localhost at: " + port);

});

//const hello = require('helloworld.html')

var fs = require('fs')

app.get("/About", function(req,res){

    //res.send('hello');
    res.writeHead(200,{'content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/About.html','utf8');
    myReadStream.pipe(res);


});