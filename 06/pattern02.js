/* Print pattern:

    *
   **
  ***
 ****
*****

*/

let i,j,k;

for(i=1; i<=5; i++){
    star = "";
    for(k=1; k<=5-i; k++){
        star += " ";
    }
        for(j=1; j<=i; j++){
            star += "*";
        }
        console.log(star);
}

/* Output --------
    *
   **
  ***
 ****
*****             

*/

/* 
star = "" ----->	Har line ke liye string ko reset karna
Agar na karein toh purani line ka data bhi jud jaata hai. */