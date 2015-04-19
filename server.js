var express = require('express');
var app = express();

app.set('port', (5000);

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  response.send('Shhhhhh....this is a secret');
})

app.use(function(request, response) {
  response.status(404).sendFile(__dirname + '/public/404.html');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost: ' + app.get('port'));
});
