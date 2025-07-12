/* Print --------------

*********
 *******
  *****
   ***
    *

*/

// for(let i=5; i>=1; i--){
//     stars = "";

//     for(let k=1; k<=5-i; k++){
//         stars += " ";
//     }
//     for(let j=1; j<=i; j++){
//         stars += "*";
//     }
//      for(let l=1; l<=i-1; l++){
//          stars += "*";
//      }
//     console.log(stars);
// }

/* Output ----------

*********
 *******
  *****
   ***
    *
    
*/

/* Yaha pe ulta print karna tha isliye i>=1 hua aur i-- mtlb decrement. 
Aur wo variable(l) wo extra star print karne ke liye. */

// Another shortcut way ----------------------------------------------------


// let m = 9;
let x = 5;
m = x*2;
m = m-1;

for(let i=5; i>=1; i--){
    stars = "";

    for(let k=1; k<=5-i; k++){
        stars += " ";
    }
    for(let j=1; j<=m; j++){
        stars += "*";
    }
    console.log(stars);
    m = m-2;
}

/* Output ----------------------------

*********
 *******
  *****
   ***
    *

*/   