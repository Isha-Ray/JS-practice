// Create a function calculator(operation, a, b) that takes a function (like add, subtract, multiply) as an argument and applies it to a and b.

function calculator(operation, a, b) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

console.log(calculator(add, 10, 5));       // Output: 15
console.log(calculator(subtract, 10, 5));  // Output: 5
console.log(calculator(multiply, 10, 5));  // Output: 50

