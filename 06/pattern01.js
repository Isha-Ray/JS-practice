/* Print pattern:

*
**
***
****
*****                               */


for(let i=1; i<=5; i++){
    stars = "";

    for(let j=1; j<=i; j++){
        stars += "*";
    }
        console.log(stars);
    
}

/* Output -------------

*
**
***
****
*****                      */

/* j=1 tb ek star print hua uske baad jb i=2 hua toh line break ho jayega, aise hi break karte karte,
i jb tk 5 ke equal nhi ho jata tb tk ye print karega. */