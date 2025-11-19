const users = [
  { name: "Jinu", age: 28, city: "Kochi" },
  { name: "Asha", age: 25, city: "Delhi" },
  { name: "Manu", age: 30, city: "Kochi" },
  { name: "Sara", age: 22, city: "Mumbai" },
];

const findUsersByCity = (users, targetCity) => {
  return users.filter(
    ({ city }) => city.toLowerCase() === targetCity.toLowerCase()
  );
};

console.log(findUsersByCity(users, "kochi"));

const namesAndAges = users.map(({ name, age }) => ({
  name,
  age,
}));

console.log(namesAndAges);
