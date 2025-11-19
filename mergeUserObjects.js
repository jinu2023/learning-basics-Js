function mergeUser(user, defaults) {
  return { ...defaults, ...user };
}

const defaults = {
  age: 18,
  address: "Unknown",
  hobbies: [],
};

const user = {
  name: "Sarah",
  hobbies: ["reading"],
};

const result = mergeUser(user, defaults);
console.log(result);
