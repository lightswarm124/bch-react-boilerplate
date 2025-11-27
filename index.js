const http = require("http");

// File: index.js
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
