//Create an array of users and display formatted information about each user.

let users = [
  {
    name: "Sarah Johnson",
    age: 25,
    city: "New York",
    email: "sarah@gamil.com",
    phone: 8798766566,
    isStudent: true,
  },
  {
    name: "Mike Smith",
    age: 30,
    city: "Los Angeles",
    email: "mike@gamil.com",
    phone: 8790766566,
    isStudent: false,
  },
  {
    name: "Lisa Brown",
    age: 22,
    city: "Chicago",
    email: "mike@gamil.com",
    phone: 8790766566,
    isStudent: true,
  },
];

// for (let i = 0; i < users.length; i++) {
//   let user = users[i];
//   console.log("User " + (i + 1) + ":");
users.forEach((user, index) => {
  {
    console.log("User " + (index + 1) + ":");
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("City: " + user.city);
    console.log("Email: " + user.email);
    console.log("Phone Number: " + user.phone);
    console.log("Student: " + user.isStudent);
    console.log("--------");
  }
});
