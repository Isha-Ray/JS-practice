/* Another method to print-------------

    *
   ***
  *****
 *******
*********

*/

let m = 1;

for(let i=1; i<=5; i++){
    star = "";

    for(let k=1; k<=5-i; k++){
        star += " ";
    }

    for(let j=1; j<=m; j++){
        star += "*";
    }
    m = m+2;
    console.log(star);
}

/* Output--------------------
    *
   ***
  *****
 *******
*********

*/

/* Shortcut method and clean, we dont have to use extra for loop.
let m = 1;	        Start with 1 star on first row
j <= m	            Print exactly m stars this row
m += 2	            Increase stars by 2 each time (odd count: 1, 3, 5...) */
