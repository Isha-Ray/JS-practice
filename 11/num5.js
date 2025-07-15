// Use .findIndex() to get the index of the first number greater than 100 in [50, 80, 120, 130].


const numbers = [50, 80, 120, 130];

const index = numbers.findIndex(num => num > 100);

console.log(index); 

// Output: 2

//.findIndex() returns the index of the first element that satisfies the condition.


