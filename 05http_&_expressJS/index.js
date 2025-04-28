// const http = require("http");       dont need to import
const express = require("express");

const app = express(); // create an express application

// Also express doesnt need http and listen method

// define routes using express
app.get("/", (req, res) => {
  return res.send("Hello from express home");
});

app.get("/about", (req, res) => {
  return res.send(
    `Hello from express About page &  My name: ${req.query.name}`
  ); // here we use .qery.{query name} to access the query.
});

// here express does not need http and listen only

app.listen(8000, () => console.log("Server started by Express"));

// const myServer = http.createServer(app);

// after creating server, we should run that server on port. that's why below line is for.

// myServer.listen(8000, () => console.log("server started."));
