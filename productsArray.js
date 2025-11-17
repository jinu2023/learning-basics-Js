const { count } = require("console");

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
  { name: "Headphones", price: 150 },
  { name: "Webcam", price: 100 },
  { name: "Desk", price: 200 },
  { name: "Chair", price: 180 },
];

let affordableProducts = products.filter((product) => product.price);
console.log("Affordable products:", affordableProducts);

let productsWithTax = products.map((product) => {
  return {
    name: product.name,
    price: product.price,
    priceWithTax: product.price * 1.1,
  };
});
console.log("Products with tax:", productsWithTax);
let totalValue = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log("Total value:", totalValue);

let mostExpensive = products.reduce((max, product) => {
  return product.price > max.price ? product : max;
});
console.log("Most expensive:", mostExpensive);

let minExpensive = products.reduce((min, product) => {
  return product.price < min.price ? product : min;
});
console.log("Minimum expensive:", minExpensive);

let isPriceInRange = products.filter(
  (product) => product.price >= 50 && product.price <= 100
);
console.log("Between 50 and 100 price range products:", isPriceInRange);

let avgPrice = products.reduce(() => {
  return totalValue / products.length;
});
console.log("Avarage price:", avgPrice);

//find productcontain "mo"

let findProductsByWord = (word) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(word.toLowerCase())
  );
};

console.log(findProductsByWord("mo"));

//formatted price list

let formattedPriceList = products.map((product) => {
  return `${product.name}: $${product.price.toFixed(2)}`;
});

console.log(formattedPriceList);
//Create a summary report showing count and total for each price range

function createPriceSummary(products) {
  let summary = {
    "0-100": { count: 0, total: 0 },
    "101-300": { count: 0, total: 0 },
    "301-1000": { count: 0, total: 0 },
  };

  products.forEach((product) => {
    if (product.price <= 100) {
      summary["0-100"].count++;
      summary["0-100"].total += product.price;
    } else if (product.price <= 300) {
      summary["101-300"].count++;
      summary["101-300"].total += product.price;
    } else {
      summary["301-1000"].count++;
      summary["301-1000"].total += product.price;
    }
  });
  return summary;
}
console.log(createPriceSummary(products));
