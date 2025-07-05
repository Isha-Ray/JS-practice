// Check if the year is a leap year.

let year = 1900;

if((year % 4 === 0 & year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year")
} else 
    console.log("Not a leap year")


/* Leap Year Rules ---------

    It is divisible by 4 and not divisible by 100,
                        OR
    It is divisible by 400.

Example -----

    2024 → leap year 
    1900 → not a leap year 
    2000 → leap year  */ 

/* 1900 divisible h 4 se but tb bhi nhi h leap year kyuki leap year nikalne ke liye,
     wo 2 condition ko follow karna parega.  */