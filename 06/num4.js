// Find sum of numbers from 1 to 100 using loop.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;  // sum = sum + i
// }

// console.log("Sum is:", sum);

// Output ---------- Sum is: 5050


// Aise hi add hote hote last me 5050 aayega-----
// 1      0 + 1 = 1
// 2	    1 + 2 = 3
// 3	    3 + 3 = 6
// 4	    6 + 4 = 10
// ....................
// 100      4950 + 100 = 5050


// Using while loop ------------------------------------

// let num = 1;
// let sum = 0;

// while (num <= 100) {
//   sum += num; 
//   num++;      
// }

// console.log("Sum of numbers from 1 to 100 is:", sum);


// Output -----------------
// Sum of numbers from 1 to 100 is: 5050


// Using do .... while loop  ------------------------------------

let num = 1;
let sum = 0;

do {
  sum += num; 
  num++;      
} while (num <= 100);

console.log("Sum of numbers from 1 to 100 is:", sum);

// Output ------------
// Sum of numbers from 1 to 100 is: 5050

// do .... while me pehle code run hota h phir condition check karta h.
