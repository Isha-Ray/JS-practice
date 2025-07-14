/* Functions --------------------------
 A block of code that performs a perticular task.


 Syntax of function --------------------------
 function functionName(parameters) {
  // code to be executed
}

Types of function ----------------------------------
1. Named Function
2. Function expression
3. Arrow Function *******************************************

Use of Function -------------------------------------------

Reusability: Write once, use many times.
Organization: Break code into smaller, manageable parts.
Avoid repetition.
Improves readability.

*/


function sayHello(){
    console.log('Hey, Isha');
}

sayHello() // Isko bolte h call the function

// (a, b) ko Arguments bolte h----------------------------------- 

function add(a, b){
    console.log(a + b);
}

add(5, 10) // Parameters

// Without using console.log-----------------------------------

function add(num1, num2) {
    return num1 + num2;
}

function multiply (a, b){
    return a * b;
}

let a = add(10, 9)
console.log('The result is', a)

// // Unlimited Arguments accept ------------------------

function addNumbers() {
    let ans = 0;
    for(let i = 0; i < arguments.length; i++) {
        ans = ans + arguments[i]
    }
    return ans;
}

function addNumbersV2(...Isha) { // Spread Operator(...)
    let ans = 0;
    for(let i = 0; i < Isha.length; i++){
        ans = ans + Isha[i]
    }
    return ans;
}

let result = addNumbersV2(10, 15, 9, 6, 14)
console.log(result)