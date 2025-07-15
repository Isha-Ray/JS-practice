// Use .reduce() to calculate the sum of [1, 2, 3, 4, 5].

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);  


// Output: 15

/* .reduce() takes a function that runs on each element.

accumulator stores the running total.
current is the current number being processed.
0 is the initial value of the accumulator.

*/
