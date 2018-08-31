//required modules
const http = require('http');
const fs = require('fs');

//define host and port for our server
const host = "127.0.0.1";
const port = 3000;

//create server with response code/content/etc.
const server = new http.createServer((req, res) => {
  //attempt to read file
  fs.readFile('../index.html', (err, html) => {
    if(err){
      res.statusCode = 401;
      res.setHeader(
        'Content-Type', 'text/plain'
      );
      res.write('Sorry error attempting to read file: ' + err);
      res.end();
    }else{
      res.statusCode = 200;
      res.setHeader(
        'Content-Type', 'text/html'
      );
      res.write(html);
      res.end();
    }
  });
});

//start server
server.listen(port, host, () => {
  console.log('Server started, running at ${host}:${port}');
});
