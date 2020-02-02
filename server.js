console.log("I'm awake.");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;


const getResponse = () => {
  return "what?";
}


const server = http.createServer((req, res) => {
  console.log("um.... I think someone wants something");
  res.end(getResponse());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


exports.getResponse = getResponse;
