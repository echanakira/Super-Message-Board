var http = require('http');
const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

//Home directory

//Loads folder containing assets
app.use(express.static(__dirname + '/settings'));

//File that will display on startup
app.get('/', function(req,res){
  res.sendFile(__dirname + '/queue/queueform.html')
})

app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
});
