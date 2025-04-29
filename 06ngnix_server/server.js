const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8000;

const myServer = http.createServer();

myServer.listen(port, () => {
  console.log("Server is live now.");
});
