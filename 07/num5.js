// Write a function findMax(arr) that returns the largest number in an array.
// ------------------------------------------------------------------------

function findMax(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) { // For loop used
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
