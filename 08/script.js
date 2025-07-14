/* Arrow Fumction ----------------------------------
An arrow function is a shorter and cleaner way to write function expressions in JavaScript. */



// 1.(a) Syntax -------------------------------------------------------------------------------------


// Regular Function Expression Syntax -----------------------------
// let greet = function() {
//   console.log("Hello");
// };

// Arrow Function Syntax ---------------------------------------
let greet = () => {
  console.log("Hello");
};

// -----------------------------------------------------------------------------------------------

const sayHello = () => {
   // Arrow Functions
    console.log("Heyy");
};

const add = (a, b) => {
    return a + b;
};

const addV2 = (a + b) ; a + b; // One liner

console.log(addV2(2,3));



/* 1.(b) Syntax Variations ------------------------------------------------------------------------

    (I) No parameter --------
    let sayHi = () => {
  console.log("Hi!");
    };
    sayHi();                // Output: Hi!

    (II) One parameter (no need for parentheses) ------------------
    let greet = name => {
  console.log("Hello, " + name);
    };
    greet("Isha");                  // Output: Hello, Isha

    (III) Multiple parameters (parentheses required) ------------------
    let add = (a, b) => {
  return a + b;
    };
    console.log(add(3, 4));             // Output: 7

    (IV) Implicit return (when only one expression is returned) -----------------
    let multiply = (x, y) => x * y;
    console.log(multiply(5, 6));            // Output: 30

    Note: No return keyword or curly braces {} needed in this case.
*/

// -----------------------------------------------------------------------------------------------





// 2. 'Arguments' Keywords -----------------------------------------------------------------------

// Use arguments in regular functions
// Use ...args in arrow functions


const addNumbers = (...num) => {
    console.log(nums);
};

addNumbers(1,3,5,7,9);




// 3. Hoisting -----------------------------------------------------------------------------------

// Arrow functions are not hoisted like normal functions.
// Always declare arrow functions before calling them.


const sayHey = () => {
    console.log("Hey there");
};

sayHey();




// 4. Keywords -----------------------------------------------------------------------------------

// Keyword----	                    Arrow Function Behavior --------
// this	                        Inherits from outer scope (lexical)
// arguments	                Not available (use ...args instead)
// super	                    Inherits from outer scope (in classes)
// new	                        Cannot be used; not a constructor
// return	                    Used normally, or skipped in one-liners


const obj = {
    value: 20,
    myFunction: function () {
        console.log(this);
    },
};

obj.myFunction ();


