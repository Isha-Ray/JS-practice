/* Print pattern:
Desired Pattern
    *    
   ***   
  *****  
 ******* 
*********

*/

let i,j,k,l;

for(i=1; i<=5; i++){
    stars = "";

    for(k=1; k<=5-i; k++){
        stars += " ";
    }
    for(j=1; j<=i; j++){
        stars += "*";
    }
    for(l=2; l<=i; l++){
        stars += "*";
    }
    console.log(stars);
}

/* Output --------------------

    *
   ***
  *****
 *******
*********

*/

// Yaha pe 4th variable(l), extra wale star ko print kar rha h.
// Extra mtlb jo last sum tha uske according.

