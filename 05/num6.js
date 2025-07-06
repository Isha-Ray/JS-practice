// Combine 3 conditions using logical AND.

/* Hum ye 3 condition maan rhe h just aise hi -------
     greater than 10, less than 100,  divisible by 5.  */

let num = 95;

if (num > 10 && num < 100 && num % 5 === 0) {
  console.log("Number is greater than 10, less than 100, and divisible by 5.");
} else {
  console.log("Number does not satisfy all three conditions.");
}

/* Output ------------
    Number is greater than 10, less than 100, and divisible by 5.  */


/* Humlog yaha && (AND) ka use kar rhe h, jisme tino condition satisfy karna chahiye
    tab hi ye run karega. Agr sirf 2 condition bhi satisfy karega tb bhi ye run nhi karega. */