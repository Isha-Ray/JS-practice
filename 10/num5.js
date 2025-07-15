// Write a function findItem(arr, item) that returns true if the item is in the array (use .includes()).

function findItem(arr, item) {
  return arr.includes(item);
}

const fruits = ["banana", "mango", "orange", "grapes"];

console.log(findItem(fruits, "mango")); 
console.log(findItem(fruits, "apple"));   


// Output: true
// Output: false

/* .includes(item) checks if the array contains that item.
Returns true if found, otherwise false. */