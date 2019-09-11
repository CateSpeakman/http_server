const http = require('http');
const url = require('url');

const connect = require('connect');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;
const publicPath = './public/';
const dataPath = './data/';

var app = connect();


app.use((request, response) => {
  let clientURL  = request.url;
  let parsedURL  = url.parse(clientURL);
  let href       = parsedURL.href;

 if (href === '/') { 
    response.end(fs.readFileSync(publicPath + 'index.html'));
  } else if (href === '/leagues') {
    response.end(fs.readFileSync(dataPath + 'leagues.json'));
  } else if (href === '/teams') {
   response.end(fs.readFileSync(dataPath + 'teams.json'));
  } else { 
 response.end('404:Error');
  }
});

//create node.js http server and listen on port
http.createServer(app).listen(port, host);

// http://127.0.0.1:3000
console.log(`http://${host}:${port}`);