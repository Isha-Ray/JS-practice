// Print pattern:
  
//    *
//    **
//    ***

// let rows = 3;

// for (let i = 1; i <= rows; i++) {
//   let stars = "*".repeat(i);  // i stars in each row
//   console.log(stars);
// }

/* Output ----

    *
    **
    ***
              */


// Without using repeat ----------------------------

let rows = 3;

for (let i = 1; i <= rows; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}



// Code Part:               Role in Pattern:

// i = 1 to 3 -------------	Kitni lines chalayenge
// "*".repeat(i) ----------	Har line me kitne stars banenge
// console.log(stars)------	Har line ko print karta hai



// Using while loop -------------------------------------

// let row = 1;

// while (row <= 3) {
//   let stars = "";
//   let col = 1;

//   while (col <= row) {
//     stars += "*";
//     col++;
//   }

//   console.log(stars);
//   row++;
// }


// For loop me hum let row = 3 likhe h, but while loop me let row = 1,
//  kyuki usko next line me hum define kar rhe h isliye.

