const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  const log = `${Date.now()} : ${req.url}\n`;
  fs.appendFile("data.txt", log, () => {
    switch (myUrl.pathname) {
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
