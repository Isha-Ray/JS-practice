//Write a function callMeLater(callback) that calls the given function after 2 seconds using setTimeout.

function callMeLater(callback) {
  setTimeout(() => {
    callback();
  }, 2000); // 2000 milliseconds = 2 seconds
}

callMeLater(() => {
  console.log("Give answer after 2 seconds!");
});

/* Output -----
Give answer after 2 seconds!
*/
