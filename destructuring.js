const user = {
  name: "Jinu",
  age: 28,
  city: "Kochi",
  email: "jinu@example.com",
};
const formatUser = ({ name, age, city, email }) => {
  return `Name: ${name}, Age: ${age}, City: ${city}, Email: ${email}`;
};
console.log(formatUser(user));
