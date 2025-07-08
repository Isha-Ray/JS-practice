// Print all odd numbers between 1 and 50.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

/* Output --------
    1
    3
    5
    7
    9
    .....
    49    */


// Using while loop ----------------

let num = 1;

while (num <= 50) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}
