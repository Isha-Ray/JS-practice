// Check if a user can apply for a loan: age > 21, salary > 25K, has no debts.


let age = 25;
let salary = 30000;
let hasNoDebts = true;

if (age > 21 && salary > 25000 && hasNoDebts) {
  console.log("User is eligible to apply for a loan.");
} else {
  console.log("User is NOT eligible to apply for a loan.");
}

// Output ----- User is eligible to apply for a loan.


/* Yaha pe tino condition satisy karna parega tb hi ye eligible hoga.
     Isliye && (AND) ka use hua.  */