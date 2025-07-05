// Nested if: check if a number is 3-digit and divisible by 9.


let number = 98;

if (number >= 100 && number <= 999) {
  if (number % 9 === 0) {
    console.log("The number is a 3-digit number and divisible by 9.")
  } else {
    console.log("The number is a 3-digit number but not divisible by 9.")
  }
} else {
  console.log("The number is not a 3-digit number.")
}



/* Yaha humlog 2 baar if use kiye kyuki yaha 2 condition h aur dono ek dusre pe
     depend kar rhe h. Multiple conditions check karne ke liye – one inside another.
     Isliye nested if use karte h.
     
     Nested ka mtlb hi hota h andar ke andar.  
     Isliye 2 baar if use kiye.     */ 
