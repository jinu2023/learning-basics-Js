let employee = {
  name: "Sarah Johnson",
  age: 25,
  designation: "Manager",
  email: "sarah@gamil.com",
  phone: 8798766566,
};

employee.city = "New York";
console.log(employee);
delete employee.city;
console.log(employee);
employee.designation = "Thozhilaly";
console.log(employee);
employee.age = employee.age * 5;
console.log(employee);
