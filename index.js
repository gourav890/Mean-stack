const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
  if(err){
    console.log('Could not connect to database')
  }else{
    console.log('connected to database' + config.db);
  }
});

app.use(express.static(__dirname + '/client/dist/'));



var port = 3000;

app.get('*', (req, res) =>{
  res.sendfile( path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, () =>{
    console.log('Listing on port ' + port);
});