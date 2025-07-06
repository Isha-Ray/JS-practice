// Write a program to check if number is divisible by 3 or 5 but not both.

        // One Method -------------------------

// let num = 9;

// if((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
//     console.log(num + " is divisible by 3 or 5 but not both.");
// } else {
//   console.log(num + " is NOT divisible by 3 or 5 only (it may be both or neither).");
// }


//  Output (num = 9) --------------------
    // 9 is divisible by 3 or 5 but not both.

// Output (num = 19) -------------------------
    // 19 is NOT divisible by 3 or 5 only (it may be both or neither).

// Output (num = 15) ------------------------------
    // 15 is NOT divisible by 3 or 5 only (it may be both or neither).


    /* Yaha pe bas hume pta chalra h ki divisible h but particularly
    kis se divisible h woh nhi pta chal rha h.   */

    // && ! ----> Allow only one to be true (3 or 5), but not both.  


        // Another Method ---------------------------------

// let num = 3;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log(num + " is divisible by BOTH 3 and 5.");
// } else if (num % 3 === 0) {
//   console.log(num + " is divisible by 3 only.");
// } else if (num % 5 === 0) {
//   console.log(num + " is divisible by 5 only.");
// } else {
//   console.log(num + " is NOT divisible by 3 or 5.");
// }


// Output ------------------
    // 3 is divisible by 3 only.

    /* Yaha pe hume particularly pta chal rha h number kis se divisible h. */








