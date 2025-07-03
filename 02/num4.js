// What's the difference between var, let, and const?

/* Ye teen tareeke hain variable banane ke 
 (yaani dabba jisme hum value store karte hain) JavaScript mein. */

/* Var ---- (Old Method)
    Function scope hota hai (kaam sirf function ke andar hi hota hai).
    Dubaara declare kar sakte ho.
    Reassign kar sakte h.

    Example ----- -------------

    var naam = "Isha";
    var naam = "Ray";   // Allowed – dubaara ban gaya
    naam = "Piyush";    //  Allowed – value badal di
    */

/* Let ----- (New Method)
    Block scope hota hai (sirf usi block ke andar chalega). ---- (Block{})
    Dubaara declare nahi kar sakte.
    Value badal sakte ho.
    Zyada safe h Var se.

    Example ---------------------

    let age = 18;
    // let age = 20; //  Error – dubaara declare nahi kar sakte
    age = 20;        //  Allowed – value badal sakte ho
    */

/* Const ------- 
    Block scope hota hai.
    Dubaara declare nahi kar sakte.
    Value badal nahi sakte (reassign nahi kar sakte).

    Example -----------------------

    const birthYear = 2005;
    // birthYear = 2010; // Error – value change nahi kar sakte 
    
    */




 