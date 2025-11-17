const { log } = require("node:console");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

//arrow function

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers2 = numbers1.filter((number) => number % 2 === 0);
console.log("Even Numbers:", evenNumbers2);

//topStudent

let students = [
  { name: "John", age: 20, grade: "A" },
  { name: "Sarah", age: 19, grade: "B" },
  { name: "Mike", age: 21, grade: "A" },
  { name: "Lisa", age: 18, grade: "C" },
];

let topStudent = students.filter((student) => student.grade === "A");
console.log("Top students:", topStudent);
