// let person = {
//   name: "Sarah Johnson",
//   age: 25,
//   city: "New York",
//   isStudent: true,
// };
// let { name, age, city } = person;
// console.log(name);
// console.log(age);
// console.log(city);

// let { name: fullName, age: userAge } = person;
// console.log(fullName);
// console.log(userAge);

// //Destructuring nexted object

let user = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

let {
  name,
  address: { street, city },
} = user;

console.log(name);
console.log(street);
console.log(city);

//Basic Array Destructuring
let personn = {
  name: "Sarah Johnson",
  age: 25,
  city: "New York",
  isStudent: true,
};
// New way (destructuring):

const { name: babu } = personn;
console.log(babu, "name");
