// Print pattern:
  
//    *
//    **
//    ***

let rows = 3;

for (let i = 1; i <= rows; i++) {
  let stars = "*".repeat(i);  // i stars in each row
  console.log(stars);
}

/* Output ----

    *
    **
    ***
              */


// Code Part:               Role in Pattern:

// i = 1 to 3 -------------	Kitni lines chalayenge
// "*".repeat(i) ----------	Har line me kitne stars banenge
// console.log(stars)------	Har line ko print karta hai