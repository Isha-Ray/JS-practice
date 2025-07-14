// High Order Function and Callback ------------------------------

/* A Higher-Order Function is a function that:

    . Takes another function as an argument, or
    . Returns another function

In simple words: Functions that work with other functions. */


/* A callback function is a function that is passed as an argument to another function, 
and is executed later (sometimes after a task is completed).  */

/* 
Higher-Order Function--->Takes or returns a function,	  Ex : map(), filter(), setTimeout()
Callback Function--->Passed to another function to be called later,	Ex : (n) => n * 2 in map()

.> A Higher-Order Function is like a chef who takes a recipe (function) as input and cooks something.
.> A Callback is that recipe given to the chef.

*/


function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result);
}

let resultFunction = add(2, 4, () => {});
resultFunction();
