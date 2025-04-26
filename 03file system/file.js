const { error } = require("console");
const fs = require("fs");

// synchronous
fs.writeFileSync("./test.txt", "Shubham Alhat");

// asynchronous
// fs.writeFile("./data.txt", "Hello world there !!", (err) => {});

// how to read any file
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// output  -   Shubham Alhat: +91-7888294386
//               Swayam: +91-6379922322

// Now about fs.readFile(). Async

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.error("Error reading contacts.txt:", err);
  } else {
    console.log("Async: ", result);
  }
});

// nw appending the data in file. to prevent overwrite.
fs.appendFileSync("./data.txt", `hey buddy\n`);
