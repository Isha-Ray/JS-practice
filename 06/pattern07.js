/* Print -----

*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

*/


let rows = 5;
let m = 9;

for (let i = 1; i <= rows; i++) {
  let row = "";

  for (let k = 1; k < i; k++) {
    row += " ";
  }

  for (let j = 1; j <= m; j++) {
    row += "*";
  }

  console.log(row);
  m -= 2;
}
// For bottom part----------------------------------------------

m = 3;

for (let i = rows - 1; i >= 1; i--) {
  let row = "";

  for (let k = 1; k < i; k++) {
    row += " ";
  }

  for (let j = 1; j <= m; j++) {
    row += "*";
  }

  console.log(row);
  m += 2;
}

/* Output ------------
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

*/