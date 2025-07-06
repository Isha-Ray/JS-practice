// Use NOT (!) to check if a variable is not undefined.


let myVar;

if (!(typeof myVar === "undefined")) {
  console.log("myVar is NOT undefined.");
} else {
  console.log("myVar is undefined.");
}

/* Output (undefined) -------------- myVar is undefined.
    Output (defined) --------------- myVar is NOT undefined.   */


/* . typeof myVar === "undefined"
   Ye check karta hai: "Kya variable undefined hai?"

   . !(typeof myVar === "undefined")
    '!' lagakar hum uska ulta (opposite) kar dete hain: "Kya variable undefined nahi hai?" 
    Isliye '!' zaroori hai. 
    
    */










