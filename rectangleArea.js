const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st number: ", (number1) => {
  rl.question("Enter 2nd number: ", (number2) => {
    const num1 = Number(number1);
    const num2 = Number(number2);

    const response = rectangleArea(num1, num2);
    console.log("Area of rectangle:", `${response} `);

    rl.close();
  });
});

let rectangleArea = (x, y) => {
  let result = x * y;
  return result;
};
