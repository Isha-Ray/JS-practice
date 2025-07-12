/* Print ------------

    *
   * *
  *   *
 *     *
*********

*/

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let row = "";

  for (let j = 1; j <= rows - i; j++) {
    row += " ";
  }

  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1 || i === rows) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}

/* Output ----------------

    *
   * *
  *   *
 *     *
*********

*/

