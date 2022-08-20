var express = require('express');
var morgan = require('morgan');
var app = express();
var pjson = require('./package.json');


//setup logging
app.use(morgan('dev'));

// Constants
const by = 'https://roxs.295devops.com'

app.get('/getenv/*', function (req, res) {
  const parts=req.url.split('/');
  var msg ='';

  if(parts[2]){
    var variable=parts[2]
    msg=`\nENVIRONMENT ${variable}\n`+process.env[variable];
  } else {
    
    msg='\nENVIRONMENT VALUES\n'+JSON.stringify(process.env,null,4);
  }
  
  res.send(req.url+msg);
  console.log(msg);
});

app.get('/*', function (req, res) {
  res.send('Hello Bootcamp Version to'+req.url+'<hr>package json:'+pjson.version);
});

const APP_PORT = process.env.PORT || 3000;

var listener = app.listen(APP_PORT, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port APP_PORT
});