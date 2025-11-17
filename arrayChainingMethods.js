let products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Book", price: 20, category: "Education" },
  { name: "Phone", price: 800, category: "Electronics" },
  { name: "Pen", price: 2, category: "Office" },
  { name: "Tablet", price: 600, category: "Electronics" },
];

let totalElectronicsValue = products
  .filter((product) => product.category === "Electronics")
  .map((product) => (product.price = product.price * 2))
  .reduce((total, price) => total + price, 0);
console.log("Total :", totalElectronicsValue);
