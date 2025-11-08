// const readline = require("node:readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a number : ", (num) => {
//   typesCheck(num);
//   rl.close();
// });
let num = 123;
let numberType = "number";
function typesCheck(num, numberType) {
  if (typeof num === numberType) {
    return true;
  } else {
    return false;
  }
}
console.log(typesCheck(num, numberType));
