const { log } = require("node:console");

const base = {
  user: { name: "Zizou", skills: ["JS", "React"] },
  theme: "dark",
};
const extraSkills = ["Node", "Docker"];

const copy = { ...base, user: { ...base.user, skills: [...base.user.skills] } };
copy.user.name = "Dan";
copy.user.skills.push("devops");
console.log(copy, "copy");
console.log(base, "base");

//Todo
let todos = [
  {
    id: 1,
    title: "create Ui",
    description: "create an employee ",
    status: "done",
  },
  {
    id: 2,
    title: "create API",
    description: "create an employee Api",
    status: "done",
  },
];

todos.push({
  id: 3,
  title: "integration",
  description: "create an employee integration api",
  status: "inprogress",
});

todos = todos.map((todo) =>
  todo.id === 3 ? { ...todo, status: "done" } : todo
);
console.log(todos);

// const removedObject = todos.filter((todo) => todo.id !== 2);

// console.log(removedObject);

const index = todos.findIndex((todo) => todo.id === 2);

todos.splice(index, 1);

console.log(todos, "remaining");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = [...arr.slice(0, 2), 99, ...arr.slice(2)];
console.log(newArr, "new arrayyy");
