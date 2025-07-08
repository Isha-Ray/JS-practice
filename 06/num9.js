// Find factorial of a number using loop.

// let num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial *= i;  // factorial = factorial * i
// }

// console.log(`Factorial of ${num} is ${factorial}`);

// Output ----- Factorial of 5 is 120.


//  Aise ye factorial count ho rha h ------
//  1 × 1 = 1
//  1 × 2 = 2
//  2 × 3 = 6
//  6 × 4 = 24
//  24 × 5 = 120


// Using while loop -------------------------------


let num = 5;
let i = 1;
let factorial = 1;

while (i <= num) {
  factorial *= i;
  i++;
}

console.log("Factorial is:", factorial);
