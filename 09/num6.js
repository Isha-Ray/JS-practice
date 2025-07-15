//  Create a customForEach(arr, callback) function that works like .forEach.

function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr); 
  }
}

const fruits = ["apple", "banana", "cherry"];

customForEach(fruits, (item, index) => {
  console.log(`${index}: ${item}`);
});

/* Output ------------
0: apple
1: banana
2: cherry
*/

/* arr[i] → current item
i → current index
arr → full array */


/* Hum ye line isliye likhte hain------ (callback(arr[i], i, arr);) -------------
Taaki callback() ko wohi 3 values milein jo normal .forEach() deta hai -----
value, index, aur array.
*/
