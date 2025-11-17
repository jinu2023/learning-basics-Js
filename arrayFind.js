//find()
let users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Sarah", email: "sarah@example.com" },
  { id: 3, name: "Mike", email: "mike@example.com" },
];

let user = users.find((user) => user.id === 2);
console.log(user);

//some() -Check if any number is greater than 3

let numbers = [1, 2, 3, 4, 5];
let hasLargeNumber = numbers.some((number) => number > 3);

console.log(hasLargeNumber);

// reduce()

let numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce((total, number) => total + number);
console.log(sum);
// -------------------------------------
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
let appleCount = items.reduce((count, item) => {
  if (item === "apple") {
    return count + 1;
  }
  return count;
}, 0);
console.log(appleCount);
