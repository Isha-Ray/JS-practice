// Write a program where all logical operators are used in one condition.

let marks = 45;
let hasExtraCredit = true;
let isBlacklisted = false;

if ((marks > 50 || hasExtraCredit) && !isBlacklisted) {
  console.log("Student passes the exam.");
} else {
  console.log("Student fails the exam.");
}

/* Yaha pe tino logical operators (&&, ||, !) ka use hua h,
    jaise : marks > 50, 'OR' the student has extra credit, 'AND' the student is 'NOT' blacklisted.
        */

