//Find the oldest and youngest users
let users = [
  {
    name: "Sarah Johnson",
    age: 25,
    city: "New York",
    email: "sarah@gamil.com",
    phone: 8798766566,
    isUSer: true,
  },
  {
    name: "Mike Smith",
    age: 30,
    city: "Los Angeles",
    email: "mike@gamil.com",
    phone: 8790766566,
    isUSer: true,
  },
  {
    name: "Lisa Brown",
    age: 22,
    city: "Chicago",
    email: "mike@gamil.com",
    phone: 8790766566,
    isUSer: true,
  },
];

const ageArray = users.map((user) => user.age);
console.log(ageArray);
const maxAge = Math.max(...ageArray);
console.log("max age:", maxAge);
const minAge = Math.min(...ageArray);
console.log("min age:", minAge);

const maxUser = users.find((user) => {
  return user.age === maxAge;
});
console.log("Max age of user:", maxUser);

const minUser = users.find((user) => {
  return user.age === minAge;
});
console.log("Min age of user:", minUser);
