// Declare a variable inside a function. Can you access it outside?

 function firstName() {
   let name = "Isha";
   console.log("Inside function:", name); 
 }
 firstName();

/* Yahan 'name' naam ka variable sirf function ke andar hi exist karta hai.
   Isko kehte hain function scope. */

/* Kyuki name variable function ke andar declare hua tha,
    to bahar se usko JavaScript pehchanta hi nahi.
    Yeh variable bahar ke code ke liye invisible hota hai.*/


// Function ke andar declare kiya gaya variable function ke bahar access nahi hota.
// Use access karne ke liye ya toh function ke bahar declare karna hoga, ya return karke bahar bhejo.
