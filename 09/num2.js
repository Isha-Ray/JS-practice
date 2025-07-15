//Write a function repeat(n, callback) that runs callback() function n times.

function repeat(n, callback) {
  for (let i = 0; i < n; i++) { // For loop used
    callback();
  }
}

repeat(3, () => {
  console.log("Hello");
});

/* Output -------------
Hello
Hello
Hello
*/
