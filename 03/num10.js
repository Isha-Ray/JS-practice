// Create a calculator using 2 numbers and a given operator: +, -, *, /, %.

let num1 = 20;
let num2 = 5;
let operator = "+"; // Change this to -, *, /, % to test other operations

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
} else if (operator === "%") {
  result = num2 !== 0 ? num1 % num2 : "Cannot find remainder with zero";
} else {
  result = "Invalid operator";
}

console.log("Result: " + result);

/* 16th line me num2 !== 0 ? karre kyuki humlog ko dekhna h num2 0 ke equal to nhi h na.
    Agr 0 ke equal hota toh ye divide nhi hota, humlog num1 !== 0 ? nhi use kar sakte 
    kyuki uska mtlb hota h  "0 se divide karna allow nahi hota". 
    */