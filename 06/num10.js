// Nested loop to print:
  
//     1 2 3
//     1 2 3
//     1 2 3
    

for (let i = 1; i <= 3; i++) {       // outer loop → rows
  let row = "";
  for (let j = 1; j <= 3; j++) {     // inner loop → columns
    row += j + " "; 
  }
  console.log(row);
}

/* Output ----

    1 2 3 
    1 2 3 
    1 2 3 
            */

// Toh column ka kaam inner loop (j) kar raha hai, but uska data row me store ho raha hai.