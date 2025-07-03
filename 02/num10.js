// Demonstrate hoisting using var.

console.log(a); // Output: undefined 
var a = 10;
console.log(a); // Output: 10

// Explanation -----------


/* Hoisting JavaScript ka ek behaviour hai
jisme JavaScript code chalane se pehle
variable aur function ke declarations ko automatically upar le jaata hai. */



// Ye sab chiz internally js me hota h------------
// var a;   //  Hoisting: declaration upar le gayi
// console.log(a);  // Abhi tak koi value assign nahi hui ---- so: undefined
// a = 10;       //  Value assign hoti hai
// console.log(a);  //  Ab output hoga: 10

// undefined ka matlab hai: variable bana hua hai, lekin usmein abhi koi value nahi rakhi gayi h.
