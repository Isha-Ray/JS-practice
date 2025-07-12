/* Print ----------

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

// For uppar part upto 9 stars -------------------------------
let rows = 5; 

let m = 1;

for (let i = 1; i <= rows; i++) {
  let row = "";

  for (let k = 1; k <= rows - i; k++) {
    row += " ";
  }
  for (let j = 1; j <= m; j++) {
    row += "*";
  }

  console.log(row);
  m += 2;
}

// After 9 star decrement to 7 star ------------------------------
m -= 4; 

for (let i = 1; i < rows; i++) {
  let row = "";

  for (let k = 1; k <= i; k++) {
    row += " ";
  }

  for (let j = 1; j <= m; j++) {
    row += "*";
  }

  console.log(row);
  m -= 2;
}

/* Output ----------------------------

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/