// What is the difference between == and === in JS?

/* '==' (Double Equals) – Loose Equality

   . Sirf values compare karta hai.
   . Type convert kar deta hai agar types alag ho.
   . Thoda unpredictable ho sakta hai.
   . Kabhi-kabhi galat result de sakta hai. 

   Example ---------------
   
    5 == "5"           //  true
    0 == false         //  true
    null == undefined  //  true

    */


/* '===' (Triple Equals) – Strict Equality

   . Value aur type dono check karta hai.
   . Koi type conversion nahi hota.
   . Zyada safe aur predictable hota hai.
   . Bugs hone ka chance kam hota hai.

   Example -------------------

    5 === "5"           //  false
    0 === false         //  false
    null === undefined  //  false
    5 === 5             //  true

        */

// Note ------ Triple euals("===") jyada prefer kiya jata h.