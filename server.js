const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

/* Start the app by listening on the default Heroku port*/
app.listen(process.env.PORT || 4202);

var http = require('http');
 http.createServer(function (req, res) { 
     res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
     }).listen(4202, "0.0.0.0");
      

     console.log('Server running at http://0.0.0.0:4202/');