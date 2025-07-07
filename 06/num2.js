// Print even numbers from 1 to 20 using a while loop.

// let i = 1;

// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

/* Output --------
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
        */


    /* Hum if tabhi use karte hain jab hume loop ke andar 
         kuch condition check karni ho, jaise even number, odd number, divisible by 3, etc.  */

    /* Hum i ko directly 2 se start karke 2-2 ka jump kara sakte h (i += 2),
         to har number already even hoga, aur if lagane ki zarurat hi nahi.  */  

    let i = 2;
    while (i <= 20) {
     console.log(i);  
     i += 2;          //  i = i + 2
    }


