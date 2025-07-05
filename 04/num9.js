// Use switch to build a mini calculator.


let num1 = 4;
let num2 = 9;
let operator = "*";

switch (operator) {
  case '+':
    console.log("Result:", num1 + num2);
    break;
  case '-':
    console.log("Result:", num1 - num2);
    break;
  case '*':
    console.log("Result:", num1 * num2);
    break;
  case '/':
    if (num2 !== 0) {
      console.log("Result:", num1 / num2);
    } else {
      console.log("Cannot divide by zero.");
    }
    break;
  case '%':
    if (num2 !== 0) {
      console.log("Result:", num1 % num2);
    } else {
      console.log("Cannot perform modulus with zero.");
    }
    break;
  default:
    console.log("Invalid operator. Please use +, -, *, /, or %.");
}
