//Write a function filterEven(callback, numbers) that uses the callback to keep only even numbers.

function filterEven(callback, numbers) {
  return numbers.filter(callback);
}

const Even = (num) => num % 2 === 0;

const result = filterEven(Even, [1, 2, 3, 4, 5, 6]);
console.log(result);  

// Output: [2, 4, 6]
