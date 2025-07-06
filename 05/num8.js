// What is the output of true && false || true?


console.log(true && false || true)

// Output ----- true

/* Reason --- && (AND) ka priority jyada hota h || (OR) se,
    toh pehle 'true && false' ---> false hoga kyuki && me dono same rahega tb hi true hoga.
    then 'false || true' ----> true hoga kyuki || me dono me se koi ek true rahe toh wo true aayega.

    Toh final value 'true' hoga.  */