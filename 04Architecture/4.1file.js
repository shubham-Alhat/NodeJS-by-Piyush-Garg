// Do you remember fs module of nodeJS.async and sync.

const fs = require("fs");
const os = require("os");
console.log(os.cpus()); // number of threads i can max to my server - 12

// console.log(1);

// Blocking .....
const result = fs.readFileSync("../03file system/data.txt", "utf-8"); // here our thread gets block
// console.log(result);

// console.log(2);

// output

// 1
// Hello world there !!hey buddy
// hey buddy
// hey buddy
// hey buddy
// 2

// Non - Blocking code.
// console.log("non-blocking code - ", 1);

fs.readFile("../03file system/data.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("error occured:", err);
  } else {
    // console.log(result);
  }
});

// console.log("non-blocking code - ", 2);

// output
// non-blocking code -  1
// non-blocking code -  2
// Hello world there !!hey buddy
// hey buddy
// hey buddy
// hey buddy
