var express = require('express');

// Create our app
var app = express();
var path = require('path');
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
