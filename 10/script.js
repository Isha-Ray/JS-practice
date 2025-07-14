/* Arrays ----------------------------------------------
 An array in JavaScript is a special variable that can store multiple values in a single variable. */

/* Syntax of Array -------------------------------------
let arrayName = [value1, value2, value3, ...];

*/ // ---------------------------------------------------------------------------------


// Homo --------------------------

const students = ["John", "Harry", "Bill", "Jane"]; // isme ek hi string ka type h // Homo
const marks = [1, 2, 3, 4, 5]; // Homo


students[1] = "Harry Potter"; // Humlog aise change kar sakte h 
// students = ["John Paper"]; // aise change nhi kar sakte ye wrong way h kyuki hum const ka use kar rhe h.
console.log(students); 
console.log(students.length); // length mtlb iske andar [] kitna value h 
console.log(students[0]); // 0 mtlb John, 1 mtlb Harry, 2 mtlb Bill, 3 mtlb Jane
// students[]; isse particular value print karwa sakte h.

students.push("Alexa"); // push mtlb add but last me 
students.push("Siri");
console.log(students);
students.pop(); // pop() ka mtlb remove last value
console.log(students);
students.reverse(); // reverse mtlb value ulta ho jayega.

// Hetero --------------------

const myArray = [1, true, "Isha", null];
console.log(myArray);
myArray.push({name: "Isha"});
console.log(myArray);
console.log(myArray.length); // it will tell the total value number // 5
console.log(myArray.indexOf("Isha")); // indexOf will tell the place number
console.log(myArray.indexOf("Nisha")); // It will give output (-1) bcoz it is not there.

/* Output -------------------------------------------------

[ 'John', 'Harry Potter', 'Bill', 'Jane' ] // console.log(students);

4    // console.log(students.length);

John   // console.log(students[0]);

[ 'John', 'Harry Potter', 'Bill', 'Jane', 'Alexa', 'Siri' ]    // After pushing // console.log(students);

[ 1, true, 'Isha', null ]   // console.log(myArray);

[ 1, true, 'Isha', null, { name: 'Isha' } ]  // After pushing // console.log(myArray);

2    // console.log(myArray.indexOf("Isha"));

*/







