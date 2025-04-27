const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url}\n`;
  fs.appendFile("data.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("hello from Homepage");

        break;
      case "/about":
        res.end("iamshubhamalhat");
        break;
      case "/contactus":
        res.end("+91-7888294386");
        break;

      default:
        res.end("404 not found");
        break;
    }
  });
});

// after creating server, we should run that server on port. that's why below line is for.

myServer.listen(8000, () => console.log("server started."));
