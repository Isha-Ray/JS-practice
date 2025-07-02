// type coercion in JavaScript — the automatic conversion of one data type 
// to another when performing operations between different types.


//  + (plus) operator, which prefers string 
// concatenation when one of the operands is a string.
console.log("2" + 2) // 22


// e - (minus) operator, which is not defined for strings.
// So JavaScript tries to convert both operands to numbers to perform subtraction.
console.log("2" - 2) // 0


// "5" * 2  // 10 → because * only works with numbers
"5" / 2  // 2.5
"5" % 2  // 1
"5" - "2" // 3
 

// Note -- jab + hota h only tab hi string concatenation hota h 
// aur sab ke liye normal mathematical operation ho rha h