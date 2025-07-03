/* 10. Write a program that outputs the output of:
js
 console.log("2" + 2);
 console.log("2" - 2); */

//  Output - 22
//  Output - 0

// Reason ----------------

/* Type coercion in JavaScript ---- the automatic conversion of one data type 
    to another when performing operations between different types. */


/*  + (plus) operator, which prefers string 
  concatenation(jorna/add) when one of the operands is a string.
 console.log("2" + 2) // 22   
    */


/*  - (minus) operator, which is not defined for strings.
 So JavaScript tries to convert both operands to numbers to perform subtraction.
console.log("2" - 2) // 0
    */


// "5" * 2  // 10 → because * only works with numbers
// "5" / 2  // 2.5
// "5" % 2  // 1
// "5" - "2" // 3
 

/* Note ----- Jab + hota h only tab hi string concatenation hota h 
    aur sab(-, *, /) ke liye normal mathematical operation ho rha h. */



/* Tricky examples --------------------
 1. console.log(null + 1); // output --- 1 
 2. console.log(undefined + 1); // output ---- NaN (Not a Number)
 3. console.log("2" > 1);  // console.log("2" > 1);  // Output ----- True
 4. console.log([] + []); //  Both empty arrays become "", so it's: "" + "" → "" // Output ----""
 5. console.log("5" * "2"); // Output ---- 10
 6. console.log("5" + 2 + 3); // Output ---- 523
 7. console.log("10" - "4" - "3" - 2 + "5"); // Output ---- 15
 */

