/* Array High Order Junctions ----------------------------------------------------------------------
They are built-in methods on arrays that take functions as arguments (callbacks) to perform operations. */


// const students = ["John", "Harry", "Bill", "Jane"];

// for(let i = 0; i < students.length; i++){
//      console.log(students[i]);
// }

// function print(n){
//     console.log(n);
// }



/* .forEach() ----------------------------------------------------------------------------
forEach() – Loop through each element

let numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2);
});
*/

// students.forEach(print);
// students.forEach((val) => console.log(val + 'Ray'));
// let newArr = [];
// numbers.forEach((num) => console.log(num));



/* .map() ----------------------------------------------------------------------------------
map() – Transform each element and return a new array

let nums = [1, 2, 3, 4];
let squares = nums.map((n) => n * n);
console.log(squares);  // [1, 4, 9, 16]
*/


// students.map((val) => console.log(val));
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// function double(n) {
//     return n * 2;
// }
// let newArr = numbers.map(double);
// console.log(newArr);


/* .find() ------------------------------------------------------------------------------------
find() – Return the first element that matches a condition

let items = [10, 20, 30, 40];
let firstBig = items.find((n) => n > 25);
console.log(firstBig);  // 30
*/


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans = numbers.find((num) => num==4);
// console.log(ans);


/* .findIndex() -------------------------------------------------------------------------------
Returns the index of the first element in the array that satisfies a given condition (callback).
If no match is found, it returns -1.
Syntax --------------------------------------------------
array.findIndex((element, index, array) => condition);
*/


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans = numbers.findIndex((num) => num==4);
// console.log(numbers[ans]);


/* .include() ----------------------------------------------------------------------------------
Checks if a specific value exists in an array.
Syntax ---------------------------------
array.includes(valueToFind);
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers.includes(3);


/* .filter() ------------------------------------------------------------------------------------
Return only elements that match a condition.

let nums = [5, 10, 15, 20];
let bigNums = nums.filter((n) => n > 10);
console.log(bigNums);  // [15, 20]
*/


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr = numbers.filter(num => num % 2 == 0);
// console.log(newArr);


/* .slice() ------------------------------------------------------------------------------------
Returns a new array by extracting a section of the original array.
It does NOT change the original array.

Syntax ------------------------------------------------
array.slice(start, end);
*/


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = numbers.slice(1, 5);
// console.log(newArr);


/* .splice() -----------------------------------------------------------------------------------
Adds, removes, or replaces elements in the original array.

Syntax -----------------------------------------------------
array.splice(start, deleteCount, item1, item2, ...)
*/


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = numbers.splice(1, 4);
// console.log(newArr);
// console.log(numbers);











