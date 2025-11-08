const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st number: ", (number1) => {
  rl.question("Enter 2nd number: ", (number2) => {
    rl.question("Enter the operator:", "ADD,SUB,MULT,DIV", (operator) => {
      const num1 = Number(number1);
      const num2 = Number(number2);

      calculator(num1, num2, operator);
      rl.close();
    });
  });
});

function calculator(x, y, operator) {
  let result;

  if (operator === "+") {
    result = x + y;
    console.log("addition of two numbers:", `${result} `);
  } else if (operator === "-") {
    result = x - y;
    console.log("substraction of two numbers:", `${result}`);
  } else if (operator === "*") {
    result = x * y;
    console.log("multiplication of two numbers:", `${result}`);
  } else if (operator === "/") {
    result = x / y;
    console.log("Division of two numbers:", `${result}`);
  } else {
    console.log("Enter a valid Operator");
  }
}
