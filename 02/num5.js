/* Declare let a = 10, and inside a block reassign it. 
  Print both inside and outside. */

  let a = 10; // declare outside block
console.log("Outside block before:", a); // Output: 10

{
  a = 20; // reassign inside block
  console.log("Inside block:", a); // Output: 20
}

console.log("Outside block after:", a); // Output: 20


/* Block{} k andr 'let a = 20' nhi liya gya isliye "Outside block after" ka value 20 hi ho gya.
  Agr block k andr 'let a = 20' use hua tab "Outside block after" ka value pehle wala 'a' jo 
  block ke bahar h wahi ho jayega jaise ki 10. */


/* console.log(a) me wohi a ka value use hoga jo sabse nearest scope me milta hai.
Agar block ke andar a declare nahi kiya gaya,
 to outer a hi use hoga — usi ka latest value print hoga. */

// declare karna mtlb 'let' use karna.


