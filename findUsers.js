//Find users..
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
  { name: "Apple", color: "Red", pricePerKg: 2.5, isUSer: false },
  { name: "Banana", color: "Yellow", pricePerKg: 1.2, isUSer: false },
];

// const activeUser = users.find((user) => user.isUSer);

// console.log(activeUser);
const activeUsers = users.filter((user) => user.isUSer);

activeUsers.forEach((user) => {
  console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
});
