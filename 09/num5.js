//  Use a callback to check if a number is odd or even and display the result.

function checkNumber(num, callback) {
  const result = callback(num);
  console.log(result);
}

const isOddOrEven = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

checkNumber(7, isOddOrEven);  
checkNumber(10, isOddOrEven); 


// Output: Odd
// Output: Even

//checkNumber(num, callback) → calls the callback function with num.
