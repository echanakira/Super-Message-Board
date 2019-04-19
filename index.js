var http = require('http');
const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

//Home directory

<<<<<<< HEAD
//Loads folder containing assets 
app.use(express.static(__dirname + '/settings'));
app.use(express.static(__dirname + '/queue'));
app.use(express.static(__dirname + '/node_modules/fs-extra/'));



//File that will display on startup
app.get('/ele', function(req,res){
  res.sendFile(__dirname + '/settings/settings.html')
=======
//Loads folder containing assets
app.use(express.static(__dirname + '/settings'));

//File that will display on startup
app.get('/', function(req,res){
  res.sendFile(__dirname + '/queue/queueform.html')
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
})

app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
<<<<<<< HEAD
});
=======
});
>>>>>>> c5c84ef85b2ea83a46a4f7a6f88564557e0e3970
