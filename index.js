var http = require('http');
const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

//Home directory

//Loads folder containing assets 
app.use(express.static(__dirname + '/settings'));
app.use(express.static(__dirname + '/queue'));
app.use(express.static(__dirname + '/node_modules/fs-extra/'));



//File that will display on startup
app.get('/ele', function(req,res){
  res.sendFile(__dirname + '/settings/settings.html')
})

app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
});