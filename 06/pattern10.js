/* Print ---------------
1
3 2
4 5 6
10 9 8 7
11 12 13 14 15
*/


let rows = 5;
let num = 1;

for (let i = 1; i <= rows; i++) {
  let rowNumbers = [];

  for (let j = 0; j < i; j++) {
    rowNumbers.push(num++);
  }

  if (i % 2 === 0) {
    rowNumbers.reverse();
  }

  console.log(rowNumbers.join(" "));
}

/* Output -------------
1
3 2
4 5 6
10 9 8 7
11 12 13 14 15
*/


/* push() inserts the item at the end of the array.

reverse() flips the entire array, last becomes first, first becomes last. */