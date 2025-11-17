const { log } = require("node:console");

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function (number) {
  return number * 2;
});
console.log("Numbers:", numbers);
console.log("Doubled Numbers:", doubled);

//Arrow Function

let numbers1 = [1, 2, 3, 4, 5];
let doubled1 = numbers1.map((number) => number * 2);
console.log("Numbers:", numbers1);
console.log("Doubled Numbers:", doubled1);

//Capitalized first letter of each word

let names = ["john", "sarah", "mike", "lisa"];
let capitalizedNames = names.map((name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log(capitalizedNames);

const text = "Hello, World!";
const greeting = text.slice(7);
console.log(greeting);
