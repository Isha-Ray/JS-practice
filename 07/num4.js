//  Write a function that takes a number and prints "Positive", "Negative" or "Zero".


// using if-else ------------------------------------------

function Number(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

Number(10);   // Output: Positive
Number(-5);   // Output: Negative
Number(0);    // Output: Zero
